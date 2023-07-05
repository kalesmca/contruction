import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const HeaderComponent = () => {
    return (
        <div>
            <div>Kalees Gardening</div>
            <div>
                <div className="nav-links">

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



                </div>
            </div>
        </div>
    )
}
export default HeaderComponent;