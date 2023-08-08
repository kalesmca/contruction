import React,{useContext, useEffect} from "react";
import { ModalContext } from "../../utils/contexts";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import {useSelector, useDispatch} from 'react-redux';
import { getConfigList } from "../../redux/actions/appConfig";
import { getEntryList } from "../../redux/actions/entry";
import "./summary.scss"

const SummaryListComponent =() =>{
    const modalState = useContext(ModalContext);
    const dispatch = useDispatch();
    const appState = useSelector((state)=> state)
    useEffect(()=>{
        if (!appState?.entry?.entryList?.length) {
            dispatch(getConfigList());
            dispatch(getEntryList())
        }

    })
    useEffect(()=>{
        console.log('appState :', appState)
    })

    const newEntry = () => {
        
        let temp = modalState.obj;
        temp.showPopup = true;
        temp.componentName = "entry"
        modalState.setObj({...modalState.obj, ...temp})
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
                            <th>Type</th>
                            <th>data</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                                <tr>

                                    <td colSpan={3}><center>No Data Found</center></td>
                                </tr>
                            


                    </tbody>
                </Table>
            </div>

        </div>
    )
}

export default SummaryListComponent;