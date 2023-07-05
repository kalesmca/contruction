import React from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {useSelector, useDispatch} from 'react-redux';
import {updateToast} from '../../redux/actions/appConfig';
import "./toast.scss";

const ToastComponent = () =>{
    const toastState = useSelector((state)=> state.toast);
    const dispatch = useDispatch();

    const closeToast = () =>{
        const data = {
            showToast:false,
            title: "SUCCESS",
            content:"UPDATED SUCCESSFULLY "
        }
        dispatch(updateToast(data))
    }
    
    return(
        <ToastContainer
          className="p-3"
          position={'bottom-center'}
          style={{ zIndex: 1 }}
        >
        <Toast onClose={() => closeToast()} show={toastState.showToast} delay={3000} autohide >
          {/* <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{toastState.title}</strong>
          </Toast.Header> */}
          <Toast.Body>{toastState.content}</Toast.Body>
        </Toast>
        </ToastContainer>
      
    )
}

export default ToastComponent;

