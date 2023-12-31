import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getConfigList } from "../../redux/actions/appConfig";
import {useSelector, useDispatch} from 'react-redux';
import { getEntryList } from "../../redux/actions/entry";

const HeaderComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const appState = useSelector((state)=> state)

    const navigation = (path) => {
        navigate(path);
    }
    console.log('appState:', appState)
    useEffect(() => {
        if (!appState?.entry?.entryList?.length) {
            dispatch(getEntryList())
        }
        if (!appState?.appConfig?.configList?.length) {
            dispatch(getConfigList());
        }

    }, [])
    return (
        <div >
            <div className="title">Sundari Gardening</div>
            <div>
                {/* <div className="nav-links">

                    <nav>

                        <div className='link'>
                            <Link to="dashboard">Dashboard</Link>
                        </div>
                        <div className='link'>
                            <Link to="summary-list">Summary</Link>
                        </div>
                        <div className='link'>
                            <Link to="config">Config</Link>
                        </div>


                    </nav>



                </div> */}

<div className="nav-links">

<nav>

    <div className='link'>
    <Link to="dashboard">Dashboard</Link>
    </div>
    <div className='link link-drop'>
        <NavDropdown title="Audit" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={()=> navigation("new-entry")}>New</NavDropdown.Item>
            <NavDropdown.Item onClick={()=> navigation("entry-list")}>Entry-List</NavDropdown.Item>
        
            <NavDropdown.Divider />

            <NavDropdown.Item onClick={()=> navigation("payment")}> Bulk Payment </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item onClick={()=> navigation("config")}> Config-List </NavDropdown.Item>
            <NavDropdown.Item onClick={()=> navigation("new-config")}> New-Config </NavDropdown.Item>

            
        </NavDropdown>
        {/* <i className="fas fa-address-card" onClick={() => { navigation("/stock") }}></i>
        <Link to="stock">{global.label.nav.stocks}</Link> */}
    </div>
    {/* <div className='link'>
        <i className="fas fa-chart-line" onClick={() => { navigation("/member-info") }}></i>
        <Link to="registration">Registration</Link>
    </div> */}


</nav>



</div>
            </div>

            
        </div>
    )
}
export default HeaderComponent;