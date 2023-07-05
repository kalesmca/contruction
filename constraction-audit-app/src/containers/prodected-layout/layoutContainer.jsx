import React,{useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import HeaderComponent from "./headerComponent";
import { useNavigate } from 'react-router-dom';
import "./layout.scss";
import ModalComponent from "../../common/modal/modalComponent";
import { AuthContext } from "../../auth";
import { ModalContext } from "../../utils/contexts";
import ToastComponent from "../../common/toast/toastComponent";

const LayoutContainer = () =>{
    const navigate = useNavigate();
    const modalContext = useContext(ModalContext)

    // const {currentUser} = useContext(AuthContext);

    const navigation = (path) =>{
        navigate(path);
    }
    // if (!currentUser) {
    //     return <Navigate to="/" />;
    //   }
    return(
        <div>
            <div className="header-container">
                <HeaderComponent/>
            </div>
            <div className="body-container">
                <Outlet />
            </div>
            {
                modalContext.obj.showPopup && (<ModalComponent />)
            }
            
            <ToastComponent />
        </div>
    )
}

export default LayoutContainer;