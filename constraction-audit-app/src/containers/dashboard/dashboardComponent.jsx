import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import "./dashboard.scss";
import { UseSelector } from "react-redux/es/hooks/useSelector";

const DashboardComponent =() =>{
    const appState = useSelector(state => state)
    console.log('all : ', appState.entry.entryList, appState.appConfig.configList)
    return (
        <div>
            Dashboard 
            <div>Entry - List</div>
            <div>
                {JSON.stringify(appState.entry.entryList)}
            </div>
            <div>
                -----------------------------------------------------------------------------------------
            </div>
            <div>
            {JSON.stringify(appState.appConfig.configList)}
            </div>
        </div>
    )
}

export default DashboardComponent;