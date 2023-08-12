import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../utils/contexts";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getConfigList } from "../../redux/actions/appConfig";
import { getEntryList } from "../../redux/actions/entry";
import { INIT_TOTAL_OBJ } from "../../config/constants";
import "./summary.scss"

const SummaryListComponent = () => {
    const modalState = useContext(ModalContext);
    const dispatch = useDispatch();
    const appState = useSelector((state) => state);
    const entryState = useSelector((state) => state.entry)
    const [entryList, setEntryList] = useState([])
    const [totalObj, setTotalObj] = useState(INIT_TOTAL_OBJ)

    useEffect(() => {
        if (!appState?.entry?.entryList?.length) {
            dispatch(getEntryList())
        }
        if (!appState?.appConfig?.configList?.length) {
            dispatch(getConfigList());
        }

    }, [])
    useEffect(() => {
        console.log('appState :', appState)
        setEntryList(entryState?.entryList);
    }, [entryState])
    useEffect(() => {
        totalCalc()
    }, [entryList])

    const newEntry = () => {

        let temp = modalState.obj;
        temp.showPopup = true;
        temp.componentName = "entry"
        modalState.setObj({ ...modalState.obj, ...temp })
    }
    const totalCalc = () => {
        let obj = {
            billAmt: 0,
            pendingAmt: 0,
            paidAmt: 0
        };
        entryList.forEach((entry) => {
            obj.paidAmt = parseInt(entry.totalPaidAmt) + parseInt(obj.paidAmt);
            obj.billAmt = parseInt(entry.billAmount) + parseInt(obj.billAmt)
            obj.pendingAmt = parseInt(entry.pendingAmount) + parseInt(obj.pendingAmt)
        })
        setTotalObj(obj)
    }

    const viewEntry = (selectedEntry) => {
        modalState.setObj({...modalState.obj, selectedEntry: selectedEntry,componentName:"entry", showPopup: true})

    }
    return (
        <div>
            <div className="query-header">

                {/* <div>
                    <Dropdown className="d-inline mx-2" value={selectedEntryType} >
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            {selectedEntryType}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                Object.keys(entryTypes).map((key, kIndex) => {
                                    return (<Dropdown.Item key={kIndex} index={kIndex} value={entryTypes[key]} onClick={(e) => { setEntryType(entryTypes[key]) }}>{entryTypes[key]}</Dropdown.Item>)
                                })
                            }

                            
                        </Dropdown.Menu>
                    </Dropdown>
                </div> */}
                <div>
                    <Button variant="primary" onClick={() => { newEntry() }}>+</Button>{' '}
                </div>

            </div>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Work</th>
                            <th>Bill Amt</th>
                            <th>Paid Amt</th>
                            <th>Pending Amt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            entryList?.length ? entryList.map((entry, entryIndex) => {
                                return (
                                    <tr key={entryIndex} onClick={()=>{viewEntry(entry)}}>

                                        <td>{entryIndex + 1}</td>
                                        <td>{entry.workDate}</td>
                                        <td>{entry?.selectedNatureOfWork?.work}</td>
                                        <td>{entry.billAmount}</td>
                                        <td>{entry.totalPaidAmt}</td>
                                        <td>{entry.pendingAmount}</td>
                                    </tr>
                                )
                            }) : (<tr>

                                <td colSpan={6}><center>No Data Found</center></td>
                            </tr>)
                        }
                        {
                            entryList?.length && (
                                <tr>
                                    <td colSpan={3}><center><b>Total</b></center> </td>
                                    <td>{totalObj.billAmt}</td>
                                    <td>{totalObj.paidAmt}</td>
                                    <td>{totalObj.pendingAmt}</td>
                                </tr>
                            )
                        }





                    </tbody>
                </Table>
            </div>

        </div>
    )
}

export default SummaryListComponent;