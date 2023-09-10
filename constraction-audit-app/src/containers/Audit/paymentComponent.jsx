import React,{useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import Table from 'react-bootstrap/Table';
import { INIT_TOTAL_OBJ } from "../../config/constants";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';



// import {}

const PaymentComponent = () =>{
    const dispatch = useDispatch();
    const appState = useSelector((state)=>state);
    const [list, setList] = useState([]);
    const [totalObj, setTotalObj] = useState(INIT_TOTAL_OBJ);
    useEffect(()=>{
        setList(appState?.entry?.entryList)
    },[appState])
    console.log('list:', list)
    const onSelectRow = (index) =>{
        let tempList = list;
        tempList[index].isSelected = !tempList[index].isSelected;
        setList([...tempList])
    }
    return(
        <div>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Selection</th>
                            <th>Date</th>
                            <th>Work</th>
                            <th>Bill Amt</th>
                            <th>Paid Amt</th>
                            <th>Pending Amt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list?.length ? list.map((entry, entryIndex) => {
                                return (
                                    <tr key={entryIndex} >

                                        <td>{entryIndex + 1}</td>
                                        <td>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={entry.isSelected}
                                                onClick={()=>{onSelectRow(entryIndex)}}
                                                />
                                            </InputGroup>
                                        </td>
                                        <td>{entry.date}</td>
                                        <td>{entry?.selectedNatureOfWork?.name}</td>
                                        <td>{entry.billAmount}</td>
                                        <td>{entry.totalPaidAmt}</td>
                                        <td>{entry.pendingAmount}</td>
                                        {/* <td>Action</td> */}
                                    </tr>
                                )
                            }) : (<tr>

                                <td colSpan={6}><center>No Data Found</center></td>
                            </tr>)
                        }
                        {
                            !list.length && (
                                <tr>
                                    <td colSpan={4}><center><b>Total</b></center> </td>
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

export default PaymentComponent;