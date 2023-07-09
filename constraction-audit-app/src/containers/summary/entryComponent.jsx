import React, { useState, useEffect } from "react";
import { entryType, INIT_ENTRY, INIT_PAID_OBJ, entryStatus } from '../../config/constants';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';

import { getConfigList } from '../../redux/actions/appConfig';
import "./summary.scss"

const EntryComponent = () => {
    const configState = useSelector((state) => state.appConfig)
    const dispatch = useDispatch()
    const [entryObj, setEntryObj] = useState(INIT_ENTRY);
    const [paidAmtObj, setPaidAmtObj] = useState(INIT_PAID_OBJ)

    useEffect(() => {
        if (!configState.configList?.length) {
            dispatch(getConfigList());
        }
    })

    const setEntryType = (selectedConfig) => {
        if (entryObj.entryType === entryType.wages) {
            setEntryObj({ ...entryObj, wageType: selectedConfig.wageType, wageName: selectedConfig.wageName, natureOfWorks: selectedConfig.natureOfWork })
        } else {
            setEntryObj({ ...entryObj, materialType: selectedConfig.materialType, shopName: selectedConfig.shopName, natureOfWorks: selectedConfig.natureOfWork })
        }
    }
    const addList = () =>{
        setEntryObj({...entryObj, paidAmountList: [...entryObj.paidAmountList, ...paidAmtObj]})
        setPaidAmtObj(INIT_PAID_OBJ);
        paidCalculation();
    }
    const paidCalculation = () =>{
        let totolPayidAmt = 0;
        if(entryObj.paidAmountList?.length){
            entryObj.paidAmountList.map((paidAmt) =>{
                totolPayidAmt = totolPayidAmt + parseInt(paidAmt)
            })
        }
        setEntryObj({...entryObj, balaceAmt: parseInt(entryObj.billAmount)-(totolPayidAmt+entryObj.discount), status: (totolPayidAmt+entryObj.discount)< parseInt(entryObj.billAmount) ? entryStatus.notSettled : entryStatus.settled})
    }

    const balanceCalc = () =>{
        entryObj.paidAmountList?.length ? setPaidAmtObj({...paidAmtObj, balaceAmt:entryObj.paidAmountList[entryObj.paidAmountList.length-1].balaceAmt - parseInt(paidAmtObj.paidAmt)}) 
                                         : setPaidAmtObj({...paidAmtObj, balaceAmt: parseInt(entryObj.billAmount) - parseInt(paidAmtObj.paidAmt)})
    }

    return (
        <div className="entry-container">
            <Form >
                <Form.Label>Config Type : </Form.Label>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="gender">

                        <Form.Check
                            inline
                            label={entryType.wages}
                            name="entryType"
                            type={"radio"}
                            id={`inline-${"wage"}-2`}
                            defaultChecked={entryObj.entryType === entryType.wages ? true : false}
                            onClick={(e) => { setEntryObj({ ...entryObj, entryType: entryType.wages }) }}
                        />
                        <Form.Check
                            inline
                            label={entryType.materials}
                            name="entryType"
                            type={"radio"}
                            defaultChecked={entryObj.entryType === entryType.materials ? true : false}
                            onClick={(e) => { setEntryObj({ ...entryObj, entryType: entryType.materials }) }}
                            id={`inline-${'materials'}-2`}
                        />
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Label> {entryObj.entryType === entryType.wages ? "Wages Type" : "Material Type"}</Form.Label>

                    <Form.Group as={Col} controlId="gender">
                        <Dropdown className="d-inline mx-2" value={entryObj.wageType} >
                            <Dropdown.Toggle id="dropdown-autoclose-true">
                                {entryObj.wageType ? entryObj.wageType : "Select"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    configState.configList.map((config, kIndex) => {
                                        if (config.entryType === entryObj.entryType) {
                                            return (<Dropdown.Item key={kIndex} index={kIndex}
                                                value={entryObj.entryType === entryType.wages ? config.wageType : config.materialType}
                                                onClick={(e) => { setEntryType(config) }}
                                            >{entryObj.entryType === entryType.wages ? config.wageType : config.materialType}
                                            </Dropdown.Item>)
                                        }
                                    })
                                }

                                {/* <Dropdown.Divider />
                            <Dropdown.Item value={"ALL"} onClick={(e) => { categoryQuery("ALL") }}>ALL</Dropdown.Item> */}

                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "-30px" }}>

                        <Form.Label>{entryObj.entryType === entryType.wages ? "Wage Name" : "Shop Name"}</Form.Label>
                        <Form.Control type="text" disabled={true} value={entryObj.entryType === entryType.wages ? entryObj.wageName : entryObj.shopName}
                        />
                    </Form.Group>

                </Row>
                {
                    entryObj.natureOfWorks?.length ? (
                        <Row className="mb-3">
                            <Form.Label>Nature of Work</Form.Label>

                            <Form.Group as={Col} controlId="workNature">
                                <Dropdown className="d-inline mx-2" value={entryObj.selectedNatureOfWork?.work} >
                                    <Dropdown.Toggle id="dropdown-autoclose-true">
                                        {entryObj.selectedNatureOfWork?.work ? entryObj.selectedNatureOfWork.work : "Select"}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {
                                            entryObj.natureOfWorks.map((work, wIndex) => {

                                                return (<Dropdown.Item key={wIndex} index={wIndex}
                                                    value={work.work}
                                                    onClick={(e) => { setEntryObj({ ...entryObj, selectedNatureOfWork: work }) }}
                                                >{work.work}
                                                </Dropdown.Item>)
                                            })
                                        }


                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "-30px" }}>

                                <Form.Label>Bill Amount</Form.Label>
                                <Form.Control type="number" value={entryObj.billAmount}
                                onChange ={(e)=> {setEntryObj({...entryObj, billAmount: e.target.value})}}
                                />
                            </Form.Group>

                        </Row>

                    ) : ""
                }
                {
                    entryObj.selectedNatureOfWork? (
                        <Table responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Mode_of_Pay</th>
                            <th>Paid Amount</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                entryObj.paidAmountList?.length ? (
                                    <tr></tr>
                                ) : <tr>
                                    <td colSpan={5}><center>No Data Found</center></td>
                                </tr>
                            }
                            <tr>
                                <td colSpan={2}>
                                <Form.Control type="date" value={paidAmtObj.paidDate} placeholder={"Paid Date"}
                                onChange ={(e)=> {setPaidAmtObj({...paidAmtObj, paidDate: e.target.value})}}
                                />
                                </td>
                                <td>
                                <Form.Control type="text" value={paidAmtObj.modeOfPay} placeholder={"Mode of Pay"}
                                onChange ={(e)=> {setPaidAmtObj({...paidAmtObj, modeOfPay: e.target.value})}}
                                />
                                </td>
                                <td>
                                <Form.Control type="number" value={paidAmtObj.paidAmt} placeholder={"Paid Amount"}
                                onChange ={(e)=> {setPaidAmtObj({...paidAmtObj, paidAmt: e.target.value})}}
                                onBlur={()=>{balanceCalc()}}
                                />
                                </td>
                                <td>
                                {paidAmtObj.balaceAmt} <span><button onClick={()=> {addList()}}>+</button></span>
                                </td>
                                <td>
                                    
                                </td>
                            </tr>
                         
                        </tbody>
                      </Table>
                    ) : ""
                }



            </Form>

        </div>
    )
}

export default EntryComponent;