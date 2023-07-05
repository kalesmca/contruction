import React, { useState, useEffect, useContext } from "react";
import { entryType, INIT_CONFIG_STATE } from '../../config/constants';
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
        let obj = {
            id: getDynamicId(),
            work: work,
            configId: configObj.configId
        }
        setConfigObj({ ...configObj, natureOfWork: [...configObj.natureOfWork, ...[obj]] })
        setWork("")
    }
    const submit =() =>{
        modalContext?.obj?.selectedConfig?.configId ? dispatch(updateConfig(configObj)) : dispatch(addNewConfig(configObj));
        
        modalContext.setObj({...modalContext.obj, showPopup:false})  
        setConfigObj(INIT_CONFIG_STATE)
    }

    const cancel = () =>{
        modalContext.setObj({...modalContext.obj, showPopup:false})  
        setConfigObj(INIT_CONFIG_STATE)
    }

    return (
        <div className="create-container">
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
                            defaultChecked={configObj.entryType === entryType.wages ? true : false}
                            onClick={(e) => { setConfigObj({ ...configObj, entryType: entryType.wages }) }}
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
                            configObj.entryType === entryType.materials ? (<> <Form.Label>Shop Name</Form.Label>
                                <Form.Control type="text" placeholder=" Name" value={configObj.shopName}
                                    onChange={(e) => { setConfigObj({ ...configObj, shopName: e.target.value }) }}
                                /></>) : (<> <Form.Label>Wage Name</Form.Label>
                                    <Form.Control type="text" placeholder=" Name" value={configObj.wageName}
                                        onChange={(e) => { setConfigObj({ ...configObj, wageName: e.target.value }) }}
                                    /></>)
                        }



                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        {
                            configObj.entryType === entryType.materials ? (<> <Form.Label>Material Type</Form.Label>
                                <Form.Control type="text" placeholder="ex: Electrical, Cement..." value={configObj.materialType}
                                    onChange={(e) => { setConfigObj({ ...configObj, materialType: e.target.value }) }}
                                /></>) : (<> <Form.Label>Wage Name</Form.Label>
                                    <Form.Control type="text" placeholder="Ex: Mason, Electrician" value={configObj.wageType}
                                        onChange={(e) => { setConfigObj({ ...configObj, wageType: e.target.value }) }}
                                    /></>)
                        }



                    </Form.Group>


                </Row>
                <Row>
                  

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
                </Row>
                    <div className="bottom">
                    <Button variant="primary" onClick={() => { submit() }}>{modalContext.obj?.selectedConfig?.configId ? "Update" : "Save"}</Button>{' '}

                    <Button variant="primary" onClick={() => { cancel() }}>Cancel</Button>{' '}

                    </div>
                   
                    
            </Form>
        </div>
    )
}
export default ConfigComponent;