import React,{useContext} from "react";
import { ModalContext } from "../../utils/contexts";
import Button from 'react-bootstrap/Button';

import "./summary.scss"

const SummaryListComponent =() =>{
    const modalState = useContext(ModalContext);
    const newEntry = () => {
        let temp = modalState.obj;
        temp.showPopup = true;
        modalState.setObj({...modalState.obj, ...temp})
    }
    return (
        <div>
            SummaryListComponent 
            <Button variant="primary" onClick={()=>{newEntry()}}>Primary</Button>{' '}

        </div>
    )
}

export default SummaryListComponent;