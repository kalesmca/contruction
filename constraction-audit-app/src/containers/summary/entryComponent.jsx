import React, { useState, useEffect } from "react";
import { entryType, INIT_ENTRY } from '../../config/constants';

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
    const [entryObj, setEntryObj] = useState(INIT_ENTRY)

    useEffect(() => {
        if (!configState.configList?.length) {
            dispatch(getConfigList());
        }
    })

    const setEntryType = (selectedConfig) => {
        if(entryObj.entryType === entryType.wages){
            setEntryObj({...entryObj, wageType: selectedConfig.wageType, wageName:selectedConfig.wageName})
        } else {
            setEntryObj({...entryObj, materialType: selectedConfig.materialType, shopName:selectedConfig.shopName})
        }
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
                   
                    <Form.Group as={Col} controlId="formGridEmail" style={{marginTop:"-30px"}}>

                        <Form.Label>{entryObj.entryType === entryType.wages ? "Wage Name" : "Shop Name"}</Form.Label>
                        <Form.Control type="text" disabled={true} value={entryObj.entryType === entryType.wages ? entryObj.wageName : entryObj.shopName}
                        />
                    </Form.Group>

                </Row>

                {/* <Row className="mb-3">
                <Form.Label>Nature of Work</Form.Label>

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


                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                   
                    <Form.Group as={Col} controlId="formGridEmail" style={{marginTop:"-30px"}}>

                        <Form.Label>{entryObj.entryType === entryType.wages ? "Wage Name" : "Shop Name"}</Form.Label>
                        <Form.Control type="text" disabled={true} value={entryObj.entryType === entryType.wages ? entryObj.wageName : entryObj.shopName}
                        />
                    </Form.Group>

                </Row> */}

            </Form>

        </div>
    )
}

export default EntryComponent;