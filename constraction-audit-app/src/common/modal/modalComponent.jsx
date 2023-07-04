import React,{useContext} from "react";
import Modal from 'react-bootstrap/Modal';

import { ModalContext } from "../../utils/contexts";
const ModalComponent = () =>{
    const modalContext = useContext(ModalContext)
    console.log(modalContext)
    const onClose =()=>{
        let temp = modalContext.obj;
        temp.showPopup = false;
        modalContext.setObj({...modalContext.obj, ...temp})
    }
    return(
        <>
        <Modal
        show={modalContext.obj.showPopup}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalContext.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Body
          </div>

        </Modal.Body>
        
      </Modal>
        </>
    )
}

export default ModalComponent;