import React, { useState, useEffect } from "react";
import { entryType, INIT_CONFIG_STATE } from '../../config/constants';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const ConfigComponent = () => {
    const [configObj, setConfigObj] = useState(INIT_CONFIG_STATE);


    return (
        <div>
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
                configObj.entryType === entryType.materials ? (<> <Form.Label>Shop Name</Form.Label>
                <Form.Control type="text" placeholder=" Name" value={configObj.shopName}
                   onChange={(e) => { setConfigObj({ ...configObj, shopName: e.target.value }) }} 
                /></>) : (<> <Form.Label>Wage Name</Form.Label>
                <Form.Control type="text" placeholder=" Name" value={configObj.wageName}
                   onChange={(e) => { setConfigObj({ ...configObj, wageName: e.target.value }) }} 
                /></>) 
            }
         
          
          
        </Form.Group>

        
      </Row>
            </Form>
        </div>
    )
}
export default ConfigComponent;