import React,{useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getConfigList} from '../../redux/actions/appConfig';

const ConfigList = () =>{
    const appState = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log('appState :', appState)
    useEffect(()=>{
        dispatch(getConfigList())
    },[])
    return(
        <div>
            ConfigList Component
        </div>
    )
}
export default ConfigList;