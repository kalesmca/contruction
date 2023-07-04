import React,{useContext, useEffect } from "react";
import { ModalContext } from "../../utils/contexts";import { useSelector, useDispatch } from 'react-redux';
import { getConfigList } from '../../redux/actions/appConfig';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ConfigList = () => {
    const modalState = useContext(ModalContext);

    const appState = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log('appState :', appState)
    useEffect(() => {
        dispatch(getConfigList())
    }, [])
    const newConfig = () => {
        
        let temp = modalState.obj;
        temp.showPopup = true;
        temp.componentName = "config"
        modalState.setObj({...modalState.obj, ...temp})
    }
    return (
        <div>
            <div>
            <Button variant="primary" onClick={()=>{newConfig()}}>+</Button>{' '}

            </div>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>WageName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default ConfigList;