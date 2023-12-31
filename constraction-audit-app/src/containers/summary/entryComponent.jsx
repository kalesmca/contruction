import React, { useState, useEffect, useContext } from "react";
import { entryType, INIT_ENTRY, INIT_PAID_OBJ, entryStatus, INIT_MATERIAL_AMT_OBJ } from '../../config/constants';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { addNewEntry } from "../../redux/actions/entry";
import { getConfigList } from '../../redux/actions/appConfig';
import { ModalContext } from "../../utils/contexts";

import "./summary.scss"

const EntryComponent = () => {
    const modalContext = useContext(ModalContext)

    const configState = useSelector((state) => state.appConfig)
    const dispatch = useDispatch()
    const [entryObj, setEntryObj] = useState(modalContext?.obj?.selectedEntry?.id ?modalContext.obj.selectedEntry:INIT_ENTRY);
    const [materialAmtObj,setMaterialAmtObj ] = useState(INIT_MATERIAL_AMT_OBJ)
    const [paidAmtObj, setPaidAmtObj] = useState(INIT_PAID_OBJ);

    useEffect(() => {
        if (!configState.configList?.length) {
            dispatch(getConfigList());
        }
        console.log('obj:', entryObj)
    }, [])

    const setEntryType = (selectedConfig) => {
        if (entryObj.entryType === entryType.vendors) {
            setEntryObj({ ...entryObj, vendorType: selectedConfig.vendorType, vendorList: selectedConfig.vendorNames, natureOfWorks: selectedConfig.natureOfWork })
        } else {
            setEntryObj({ ...entryObj, materialType: selectedConfig.materialType, shopList: selectedConfig.vendorNames, natureOfWorks: selectedConfig.natureOfWork })
        }
    }
    const addList = () => {

        if (paidAmtObj?.paidAmt && paidAmtObj.paidDate) {
            let paidAmt = 0
            if (entryObj.paidAmountList?.length) {
                paidAmt = paidAmtObj.paidAmt;
                entryObj.paidAmountList.forEach((paidObj) => {
                    paidAmt = parseInt(paidAmt) + parseInt(paidObj.paidAmt);
                })
                setEntryObj({ ...entryObj, paidAmountList: [...entryObj.paidAmountList, ...[paidAmtObj]], totalPaidAmt: paidAmt, pendingAmount: parseInt(entryObj.billAmount) - parseInt(paidAmt) })
            } else {
                setEntryObj({ ...entryObj, paidAmountList: [...entryObj.paidAmountList, ...[paidAmtObj]], totalPaidAmt: paidAmtObj.paidAmt, pendingAmount: parseInt(entryObj.billAmount) - parseInt(paidAmtObj.paidAmt) })
            }
            setPaidAmtObj(INIT_PAID_OBJ);
        }

    }

    const addMaterial = () =>{
        if(entryObj.materialAmtList?.length){
            let billAmt = entryObj.billAmount + parseInt(materialAmtObj.amount);
            setEntryObj({ ...entryObj, materialAmtList: [...entryObj.materialAmtList, ...[materialAmtObj]], billAmount: billAmt })

        } else {
            setEntryObj({...entryObj, materialAmtList:[...entryObj.materialAmtList, ...[materialAmtObj]], billAmount: parseInt(materialAmtObj.amount)})
        }
        setMaterialAmtObj(INIT_MATERIAL_AMT_OBJ);
        
    }


    // const balanceCalc = () => {
    //     setPaidAmtObj({ ...paidAmtObj, balanceAmt: entryObj.pendingAmount - parseInt(paidAmtObj.paidAmt) })
    //     setEntryObj({...entryObj, pendingAmount: entryObj.pendingAmount- parseInt(paidAmtObj.paidAmt)})
    // }

    // const setInitialPendingAmt = () =>{
    //     setEntryObj({...entryObj, pendingAmount: entryObj.billAmount})
    // }

    const saveEntry = () => {
        dispatch(addNewEntry(entryObj));
        modalContext.setObj({...modalContext.obj, showPopup:false})  
        setEntryObj(INIT_ENTRY);
        setPaidAmtObj(INIT_PAID_OBJ);

    }



    return (
        <div className="entry-container">
            <Form >
                <div className="work-date">
                    <Form.Control type="date" value={entryObj.workDate} placeholder={"Work Date"}
                        onChange={(e) => { setEntryObj({ ...entryObj, workDate: e.target.value }) }}
                    />
                </div>


                <Form.Label><b>Type</b> </Form.Label>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="gender">

                        <Form.Check
                            inline
                            label={entryType.vendors}
                            name="entryType"
                            type={"radio"}
                            id={`inline-${"vendor"}-2`}
                            defaultChecked={entryObj.entryType === entryType.vendors ? true : false}
                            onClick={(e) => { setEntryObj({ ...entryObj, entryType: entryType.vendors }) }}
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

                {entryObj.entryType === entryType.vendors ? (
                    <>
                    <Form.Label> vendors Type </Form.Label>
                    <Form.Group as={Col} controlId="vendors_type">
                    <Dropdown className="d-inline mx-2" value={entryObj.vendorType} >
                            <Dropdown.Toggle id="dropdown-autoclose-true">
                                {!entryObj.vendorType ? "Select" : entryObj.vendorType}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    configState.configList.map((config, kIndex) => {
                                        if (config.entryType === entryObj.entryType) {
                                            return (<Dropdown.Item key={kIndex} index={kIndex}
                                                value={entryObj.entryType === entryType.vendors ? config.vendorType : config.materialType}
                                                onClick={(e) => { setEntryType(config) }}
                                            >{entryObj.entryType === entryType.vendors ? config.vendorType : config.materialType}
                                            </Dropdown.Item>)
                                        }
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                    </Form.Group>
                    </>
                ) : (
                    <>
                        <Form.Label> "Material Type" </Form.Label>
                        <Form.Group as={Col} controlId="material_type">
                        <Dropdown className="d-inline mx-2" value={ entryObj.materialType} >
                            <Dropdown.Toggle id="dropdown-autoclose-true">
                                {!entryObj.materialType? "Select" : entryObj.materialType}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    configState.configList.map((config, kIndex) => {
                                        if (config.entryType === entryObj.entryType) {
                                            return (<Dropdown.Item key={kIndex} index={kIndex}
                                                value={entryObj.entryType === entryType.vendors ? config.vendorType : config.materialType}
                                                onClick={(e) => { setEntryType(config) }}
                                            >{entryObj.entryType === entryType.vendors ? config.vendorType : config.materialType}
                                            </Dropdown.Item>)
                                        }
                                    })
                                }



                            </Dropdown.Menu>
                        </Dropdown>
                        </Form.Group>
                        
                    </>
                ) }

                    
                    <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "-30px" }}>
                        {
                            entryObj.entryType === entryType.vendors ? (
                                <>
                                    <Form.Label> Vendor Name</Form.Label>
                                    <Form.Group as={Col} controlId="vendorName">
                                        <Dropdown className="d-inline mx-2" value={entryObj.vendorName} >
                                            <Dropdown.Toggle id="dropdown-autoclose-true">
                                                {entryObj.vendorName ? entryObj.vendorName : "Select"}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {
                                                    entryObj?.vendorList?.length && entryObj?.vendorList?.map((vendor, kIndex) => {

                                                        return (<Dropdown.Item key={kIndex} index={kIndex}
                                                            value={entryObj.vendorName}
                                                            onClick={(e) => { setEntryObj({ ...entryObj, vendorName: vendor }) }}
                                                        >{vendor}
                                                        </Dropdown.Item>)

                                                    })
                                                }

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Form.Group>

                                </>

                            ) : (
                                <>
                                    <Form.Label> Shop Name</Form.Label>
                                    <Form.Group as={Col} controlId="vendorName">
                                        <Dropdown className="d-inline mx-2" value={entryObj.vendorName} >
                                            <Dropdown.Toggle id="dropdown-autoclose-true">
                                                {entryObj.vendorName ? entryObj.vendorName : "Select"}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {
                                                    entryObj?.shopList?.length && entryObj?.shopList?.map((shop, kIndex) => {

                                                        return (<Dropdown.Item key={kIndex} index={kIndex}
                                                            value={entryObj.vendorName}
                                                            onClick={(e) => { setEntryObj({ ...entryObj, vendorName: shop }) }}
                                                        >{shop}
                                                        </Dropdown.Item>)

                                                    })
                                                }



                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Form.Group>

                                </>

                            )
                        }

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
                                    onChange={(e) => { setEntryObj({ ...entryObj, billAmount: e.target.value }) }}
                                />
                            </Form.Group>

                        </Row>

                    ) : ""
                }
                <div>Materials</div>
                {
                    entryObj.selectedNatureOfWork ? (
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Material</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    entryObj.materialAmtList?.length ? entryObj.materialAmtList.map((material, entryIndex) => {
                                        return (
                                            <tr key={entryIndex}>
                                                <td>{entryIndex + 1}</td>
                                                <td>{material.name}</td>
                                                <td>{material.price}</td>
                                                <td>{material.qty}</td>
                                                <td>{material.amount}</td>
                                            </tr>
                                        )
                                    }) : <tr>
                                        <td colSpan={5}><center>No Data Found</center></td>
                                    </tr>
                                }
                                <tr>
                                    <td colSpan={2}>
                                        <Form.Control type="text" value={materialAmtObj.name} placeholder={"Material Name"}
                                            onChange={(e) => { setMaterialAmtObj({ ...materialAmtObj, name: e.target.value }) }}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control type="number" value={materialAmtObj.price} placeholder={"Price of Material"}
                                            onChange={(e) => { setMaterialAmtObj({ ...materialAmtObj, price: e.target.value }) }}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control type="number" value={materialAmtObj.qty} placeholder={"Quantity"}
                                            onChange={(e) => { setMaterialAmtObj({ ...materialAmtObj, qty: e.target.value, amount:(parseFloat(e.target.value)* parseInt(materialAmtObj.price)) }) }}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control type="number" value={materialAmtObj.amount} placeholder={"Amount"} disabled={true}
                                            onChange={(e) => { setMaterialAmtObj({ ...materialAmtObj, amount: e.target.value }) }}
                                        />
                                    </td>
                                    <td>
                                        <span>
                                            <Button variant="primary" onClick={() => { materialAmtObj.amount && addMaterial() }}>+</Button>{' '}
                                        </span>
                                    </td>
                                    <td>

                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    ) : ""
                }
                {
                    entryObj.selectedNatureOfWork ? (
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Mode_of_Pay</th>
                                    <th>Paid Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    entryObj.paidAmountList?.length ? entryObj.paidAmountList.map((paidObj, entryIndex) => {
                                        return (
                                            <tr key={entryIndex}>
                                                <td>{entryIndex + 1}</td>
                                                <td>{paidObj.paidDate}</td>
                                                <td>{paidObj.modeOfPay}</td>
                                                <td>{paidObj.paidAmt}</td>
                                            </tr>
                                        )
                                    }) : <tr>
                                        <td colSpan={5}><center>No Data Found</center></td>
                                    </tr>
                                }
                                <tr>
                                    <td colSpan={2}>
                                        <Form.Control type="date" value={paidAmtObj.paidDate} placeholder={"Paid Date"}
                                            onChange={(e) => { setPaidAmtObj({ ...paidAmtObj, paidDate: e.target.value }) }}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control type="text" value={paidAmtObj.modeOfPay} placeholder={"Mode of Pay"}
                                            onChange={(e) => { setPaidAmtObj({ ...paidAmtObj, modeOfPay: e.target.value }) }}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control type="number" value={paidAmtObj.paidAmt} placeholder={"Paid Amount"}
                                            onChange={(e) => { setPaidAmtObj({ ...paidAmtObj, paidAmt: e.target.value }) }}
                                        />
                                    </td>
                                    <td>
                                        <span>
                                            <Button variant="primary" onClick={() => { paidAmtObj.paidAmt && addList() }}>+</Button>{' '}
                                        </span>
                                    </td>
                                    <td>

                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    ) : ""
                }

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="pending">
                        <Form.Label>Paid Amount</Form.Label>
                        <Form.Control type="text" placeholder="0" disabled={true} value={entryObj.totalPaidAmt} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="pending">
                        <Form.Label>Pending Amount</Form.Label>
                        <Form.Control type="text" placeholder="0" disabled={true} value={entryObj.pendingAmount} />
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Status</Form.Label>
          {
            entryObj.status ? (<Alert variant={"warning"}>
            <div>Pending</div>
        </Alert>) : <Alert variant={"primary"}>
            <div>Done</div>
        </Alert>
          }
          
        </Form.Group>  */}
                </Row>
                <Row className="mb-3">
                    <center>
                        <Button variant="primary" onClick={() => { saveEntry() }}>Save</Button>{' '}

                    </center>
                </Row>



            </Form>

        </div>
    )
}

export default EntryComponent;