import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../utils/contexts";
import { useSelector, useDispatch } from 'react-redux';
import { getConfigList } from '../../redux/actions/appConfig';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { entryType as entryTypes } from '../../config/constants';

const ConfigList = () => {
    const modalState = useContext(ModalContext);
    const configState = useSelector((state) => state.appConfig)
    const [selectedEntryType, setEntryType] = useState(entryTypes.materials)
    const dispatch = useDispatch()
    console.log('configState :', configState)
    useEffect(() => {
        dispatch(getConfigList())
    }, [])
    const newConfig = () => {

        let temp = modalState.obj;
        temp.showPopup = true;
        temp.componentName = "config"
        modalState.setObj({ ...modalState.obj, ...temp })
    }
    return (
        <div>
            <div>

                <div>
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

                            {/* <Dropdown.Divider />
                            <Dropdown.Item value={"ALL"} onClick={(e) => { categoryQuery("ALL") }}>ALL</Dropdown.Item> */}

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <Button variant="primary" onClick={() => { newConfig() }}>+</Button>{' '}
                </div>

            </div>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>{selectedEntryType === entryTypes.materials ? "Shop Name" : "Wages-Name"}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            configState.configList?.length ? configState.configList.map((config, cIndex) => {
                                if (config.entryType === selectedEntryType) {
                                    return (
                                        <tr key={cIndex}>
                                            <td>{cIndex + 1}</td>
                                            <td>{selectedEntryType === entryTypes.materials ? config.materialType : config.wageType}</td>
                                            <td>{selectedEntryType === entryTypes.materials ? config.shopName : config.wageName}</td>
                                        </tr>
                                    )
                                }

                            }) : (
                                <tr>

                                    <td colSpan={3}>No Data Found</td>
                                </tr>
                            )

                        }


                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default ConfigList;