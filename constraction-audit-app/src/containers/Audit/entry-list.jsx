
import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { INIT_TOTAL_OBJ, entryType, INIT_DATE_RANGE } from "../../config/constants";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';
import {formatAppDate} from '../../config/utils';
import { ModalContext } from "../../utils/contexts";
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./entry-list.scss";

const EntryListComponent = () => {
    const modalState = useContext(ModalContext);
    const [selectedEntryType, setEntryType] = useState("ALL")
    const [selectedType, setType] = useState("ALL")
    const [typeList, setTypeList] = useState([])

    const dispatch = useDispatch();
    const appState = useSelector((state) => state);
    const [list, setList] = useState([]);
    const [isDateFilter, setDateFilterFlag] = useState(false)
    const [totalObj, setTotalObj] = useState(INIT_TOTAL_OBJ);
    const [date, setDate] = useState(INIT_DATE_RANGE);
    console.log('date',date)
   
    useEffect(()=>{
        let tempObj = JSON.parse(JSON.stringify(INIT_TOTAL_OBJ)) 
        list.map((item)=>{
            tempObj.billAmt += item.billAmount; 
            tempObj.paidAmt += item.totalPaidAmt; 
            tempObj.pendingAmt += item.pendingAmount; 
        })
        console.log(tempObj);
       
        setTotalObj({...totalObj, billAmt:tempObj.billAmt, paidAmt: tempObj.paidAmt, pendingAmt: tempObj.pendingAmt})
        console.log('totObj:', totalObj)
    },[list])
    useEffect(() => {

        let newEntryState = Object.assign({}, appState?.entry);
        let newList = newEntryState?.entryList 
        newList.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
          });
        setList(newList)
    }, [appState])

    
    useEffect(()=>{
        
        queryByList();
    },[selectedEntryType, date, selectedType])
    
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
    const viewEntry = (selectedEntry) => {
        modalState.setObj({...modalState.obj, selectedEntry: selectedEntry,componentName:"entry", showPopup: true})

    }
    
    const queryByList = () =>{
        let entryState = Object.assign({}, appState?.entry);
        let queryList = entryState?.entryList; 
        if(selectedEntryType !== "ALL"){
            queryList = queryList.filter((data)=>{
                return data.entryType === selectedEntryType
            })
        }
        if(date[0].endDate){
             queryList = queryList.filter((data)=> {
                let entryDate= new Date(data.date)
                if(entryDate>=date[0].startDate && entryDate<= date[0].endDate)
                {
                    return data;
                }
            })
        }
        if(selectedType !== "ALL"){
            queryList = queryList.filter((data)=>{
                return data.materialType === selectedType || data.vendorType === selectedType
            })
        }
        setList([...queryList]) 
    }

    const selectEntry = (data) =>{
        setEntryType(data);
        if(data !== 'ALL'){
            let tempList = [];
            appState.appConfig.configList.map((config) =>{
                if(config.entryType === data){
                    tempList.push(config.materialType? config.materialType:config.vendorType)
                }
            })
            setTypeList(tempList)

        }
    }
      
      
    return (
        <div className="list-container">
            <div className="query-container">
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={isDateFilter}
                        onChange={(e) => { setDateFilterFlag(e.target.checked) }}
                    />
                    <Form.Control aria-label="Text input with checkbox" placeholder="Date Filter" disabled={true} value={formatAppDate(date[0]?.startDate) + " -TO- " + date[0]?.endDate} />

                </InputGroup>
                <Dropdown className="d-inline mx-2" value={selectedEntryType} >
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        {selectedEntryType}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            Object.keys(entryType).map((key, kIndex) => {
                                return (<Dropdown.Item index={kIndex} value={entryType[key]} onClick={(e) => { selectEntry(entryType[key]) }}>{entryType[key]}</Dropdown.Item>)

                            })
                        }

                        <Dropdown.Divider />
                        <Dropdown.Item value={"ALL"} onClick={(e) => { selectEntry("ALL") }}>ALL</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
                {
                    typeList?.length ? (
                        <Dropdown className="d-inline mx-2" value={selectedType} >
                            <Dropdown.Toggle id="dropdown-autoclose-true">
                                {selectedType}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    typeList.map((type, kIndex) => {
                                        return (<Dropdown.Item index={kIndex} value={type} onClick={(e) => { setType(type) }}>{type}</Dropdown.Item>)

                                    })
                                }

                                <Dropdown.Divider />
                                <Dropdown.Item value={"ALL"} onClick={(e) => { setType("ALL") }}>ALL</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    ) : ""
                }
                
                {
                    isDateFilter && (
                        <div className="date-pic">
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                            />
                        </div>
                    )
                }
            </div>
            
            
            <div className="table-container">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            {/* <th>Selection</th> */}
                            <th>Date</th>
                            <th>Work</th>
                            <th>Bill Amt</th>
                            <th>Paid Amt</th>
                            <th>Pending Amt</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list?.length ? list.map((entry, entryIndex) => {
                                return (
                                    <tr key={entryIndex}  onClick={()=>{viewEntry(entry)}}>

                                        <td>{entryIndex + 1}</td>
                                        {/* <td>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={entry.isSelected}
                                                    onChange={(e) => { onSelectRow(entryIndex, e) }}
                                                />
                                            </InputGroup>
                                        </td> */}
                                        <td>{entry.date}</td>
                                        <td>{entry?.selectedNatureOfWork?.name}</td>
                                        <td>{entry.billAmount}</td>
                                        <td>{entry.totalPaidAmt}</td>
                                        <td>{entry.pendingAmount}</td>
                                        {/* <td onClick={()=>{viewEntry(entry)}}>View</td> */}
                                    </tr>
                                )
                            }) : (<tr>

                                <td colSpan={6}><center>No Data Found</center></td>
                            </tr>)
                        }
                        {
                            list.length && (
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

export default EntryListComponent;