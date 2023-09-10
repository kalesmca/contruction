import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { INIT_TOTAL_OBJ } from "../../config/constants";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';
import {formatAppDate} from '../../config/utils';
// import {}

const PaymentComponent = () => {
    const dispatch = useDispatch();
    const appState = useSelector((state) => state);
    const [list, setList] = useState([]);
    const [isDateFilter, setDateFilterFlag] = useState(false)
    const [totalObj, setTotalObj] = useState(INIT_TOTAL_OBJ);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    useEffect(()=>{
        filterByDate()
    },[date])
    useEffect(() => {
        setList(appState?.entry?.entryList)
    }, [appState])
    console.log('list:', list, date)
    const onSelectRow = (index, e) => {
        console.log(e)
        let tempList = list;
        tempList[index].isSelected = e.target.checked;
        setList([...tempList])
    }
    const filterByDate = ()=>{
        let filteredList = appState?.entry?.entryList.filter((data)=> {
            let entryDate= new Date(data.date)
            if(entryDate>=date[0].startDate && entryDate<= date[0].endDate)
            {
                return data;
            }
             
        })
        console.log('filterlist :', filteredList)
        setList([...filteredList])

    }


    return (
        <div>
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={isDateFilter}
                        onChange={(e) => { setDateFilterFlag(e.target.checked) }}
                    /> 
                    <Form.Control aria-label="Text input with checkbox" placeholder="Date Filter" disabled={true} value={formatAppDate(date[0]?.startDate) +" -TO- " + date[0]?.endDate }/>

                </InputGroup>
            </div>
            {
                isDateFilter && (
                    <div>
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                />
            </div>
                )
            }
            
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
                                                    // onClick={()=>{onSelectRow(entryIndex)}}
                                                    onChange={(e) => { onSelectRow(entryIndex, e) }}
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