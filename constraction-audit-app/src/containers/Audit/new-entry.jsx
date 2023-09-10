import React from "react";
import {useSelector, useDispatch} from 'react-redux'

const NewEntryComponent = () =>{
    const appState = useSelector((state)=> state)
    console.log(appState)
    return(
        <div>New Entry Component</div>
    )
}

export default NewEntryComponent;