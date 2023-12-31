import React, { useState, useEffect, useContext } from "react";
import { entryType, INIT_CONFIG_STATE, POPUP_INIT_STATE } from '../../config/constants';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getDynamicId } from "../../config/utils";
import { addNewConfig, updateConfig } from "../../redux/actions/appConfig";
import {useDispatch, useSelector} from 'react-redux'
import './config.scss';
import { ModalContext } from "../../utils/contexts";
// import { updateConfig } from "../../redux/API/apiService";

const ConfigComponent = () => {
    const modalContext = useContext(ModalContext)

    const [configObj, setConfigObj] = useState(modalContext?.obj?.selectedConfig?.configId ?modalContext.obj.selectedConfig:INIT_CONFIG_STATE);
    console.log('configObj : ', configObj)
    const [work, setWork] = useState("");
    const dispatch = useDispatch();

    const addWork = () => {
        if(work){
            let obj = {
                id: getDynamicId(),
                work: work,
                configId: configObj.configId
            }
            setConfigObj({ ...configObj, natureOfWork: [...configObj.natureOfWork, ...[obj]] })
            setWork("")
        }
        
    }
    const submit =() =>{
        modalContext?.obj?.selectedConfig?.configId ? dispatch(updateConfig(configObj)) : dispatch(addNewConfig(configObj));
        
        modalContext.setObj({...modalContext.obj, showPopup:false})  
        setConfigObj(INIT_CONFIG_STATE)
    }

    const cancel = () =>{
        modalContext.setObj({...modalContext.obj, ...POPUP_INIT_STATE})  
        setConfigObj(INIT_CONFIG_STATE)
    }

    const shopNamChange = (e, index) =>{
        let temp = configObj.vendorNames;
        temp[index] = e.target.value;
        setConfigObj({...configObj, vendorNames:temp})
    }

    const vendorNamChange = (e, index) =>{
        let temp = configObj.vendorNames;
        temp[index] = e.target.value;
        setConfigObj({...configObj, vendorNames:temp})
    }

    const addShop = () =>{
        if(configObj.vendorNames[configObj.vendorNames.length-1]){
            let temp = configObj.vendorNames;
            temp.push("")
            setConfigObj({...configObj, vendorNames:temp})
        }
        
    }
    const addvendor = () =>{
        if(configObj.vendorNames[configObj.vendorNames.length-1]){
            let temp = configObj.vendorNames;
            temp.push("")
            setConfigObj({...configObj, vendorNames:temp})
        }
    }
    return (
        <div className="create-container">
            <Form >
                <Form.Label>Config Type : </Form.Label>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="gender">

                        <Form.Check
                            inline
                            label={entryType.vendors}
                            name="entryType"
                            type={"radio"}
                            id={`inline-${"vendor"}-2`}
                            defaultChecked={configObj.entryType === entryType.vendors ? true : false}
                            onClick={(e) => { setConfigObj({ ...configObj, entryType: entryType.vendors }) }}
                        />
                        <Form.Check
                            inline
                            label={entryType.materials}
                            name="entryType"
                            type={"radio"}
                            defaultChecked={configObj.entryType === entryType.materials ? true : false}
                            onClick={(e) => { setConfigObj({ ...configObj, entryType: entryType.materials }) }}
                            id={`inline-${'materials'}-2`}
                        />
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        {
                            configObj.entryType === entryType.materials ? (<div>Shop Names <Button variant="primary" onClick={() => { addShop() }}>+</Button>{configObj.vendorNames.map((vendorName, shopIndex)=>{
                                return(<> 
                                <Form.Control type="text" placeholder=" Shop Name" value={vendorName}
                                    onChange={(e) => { shopNamChange(e, shopIndex)}}
                                /></>) 
                            })} </div>) : 
                            (<div>vendor Names <Button variant="primary" onClick={() => { addvendor() }}>+</Button>{configObj.vendorNames.map((vendorName, wIndex)=>{
                                return(<> 
                                <Form.Control type="text" placeholder=" vendor Name" value={vendorName}
                                    onChange={(e) => { vendorNamChange(e, wIndex)}}
                                /></>) 
                            })} </div>)
                            
                        }



                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        {
                            configObj.entryType === entryType.materials ? (<> <Form.Label>Material Type</Form.Label>
                                <Form.Control type="text" placeholder="ex: Electrical, Cement..." value={configObj.materialType}
                                    onChange={(e) => { setConfigObj({ ...configObj, materialType: e.target.value }) }}
                                /></>) : (<> <Form.Label>vendor Type</Form.Label>
                                    <Form.Control type="text" placeholder="Ex: Mason, Electrician" value={configObj.vendorType}
                                        onChange={(e) => { setConfigObj({ ...configObj, vendorType: e.target.value }) }}
                                    /></>)
                        }



                    </Form.Group>


                </Row>
                {/* <Row>
                  

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nature of Works</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    configObj.natureOfWork?.length ?
                                        configObj.natureOfWork.map((nWork, nIndex) => {
                                            return (
                                                <tr>
                                                    <td>{nIndex + 1}</td>
                                                    <td colSpan={2}>{nWork.work}</td>
                                                </tr>
                                            )
                                        }) : ""
                                }
                                <tr>
                                    <td colSpan={2}><Form.Control type="text" placeholder="Ex: Billar, Borewell" value={work}
                                        onChange={(e) => { setWork(e.target.value) }}
                                    /></td>
                                    <td>            <Button variant="primary" onClick={() => { addWork() }}>+</Button>{' '}
                                    </td>
                                </tr>


                            </tbody>
                        </Table>
                </Row> */}
                    <div className="bottom">
                    <Button variant="primary" onClick={() => { submit() }}>{modalContext.obj?.selectedConfig?.configId ? "Update" : "Save"}</Button>{' '}

                    <Button variant="primary" onClick={() => { cancel() }}>Cancel</Button>{' '}

                    </div>
                   
                    
            </Form>
        </div>
    )
}
export default ConfigComponent;