import React from "react";
import { Outlet, Link } from "react-router-dom";
import HeaderComponent from "./headerComponent";
import { useNavigate } from 'react-router-dom';
import "./layout.scss";
import ModalComponent from "../../common/modal/modalComponent";

const LayoutContainer = () =>{
    const navigate = useNavigate();
    const navigation = (path) =>{
        navigate(path);
    }
    return(
        <div>
            <div className="header-container">
                <HeaderComponent/>
            </div>
            <div className="body-container">
                <Outlet />
            </div>
            <ModalComponent />

        </div>
    )
}

export default LayoutContainer;