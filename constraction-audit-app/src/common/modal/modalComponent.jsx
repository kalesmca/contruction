import React,{useContext} from "react";
import Modal from 'react-bootstrap/Modal';
import ConfigComponent from "../../containers/constructionConfig/createConfig";
import EntryComponent from "../../containers/summary/entryComponent";
import { ModalContext } from "../../utils/contexts";

import { POPUP_INIT_STATE } from "../../config/constants";
const componentObj = {
    entry : EntryComponent,
    config: ConfigComponent
  }
const ModalComponent = () =>{
    const modalContext = useContext(ModalContext)
    console.log(modalContext)
    const onClose =()=>{
        let temp = modalContext.obj;
        temp.showPopup = false;
        modalContext.setObj({...modalContext.obj, ...POPUP_INIT_STATE})
    }
    const getComponent = () =>{
    
        let Component = componentObj[modalContext.obj.componentName];
            return (Component && <Component />)
      }
    return(
        <>
        <Modal
        show={modalContext.obj.showPopup}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered

      >
        <Modal.Header closeButton>
          <Modal.Title>{modalContext.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
          <div>
            {
                modalContext.obj.componentName ? getComponent() : (<div>Default body</div>)
            }
          </div>

        </Modal.Body>
        
      </Modal>
        </>
    )
}

export default ModalComponent;