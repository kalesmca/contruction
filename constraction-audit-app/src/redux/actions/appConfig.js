import {getDataListByDBName} from '../API/apiService';
import { db } from "../../firebase-config";
import { UPDATE_CONFIG_LIST, UPDATE_TOAST } from '../../config/actions';

import { DB } from '../../config/constants'
import {
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc
} from "firebase/firestore";
import { async } from '@firebase/util';
console.log('env:', process.env, process.env?.NODE_ENV)
const CollectionRef = collection(db, DB.configList);
export const getConfigList = () => async(dispatch, getState) =>{
    try{
        
        const data = await getDocs(CollectionRef);
        let dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log('data list:', dataList)
        dispatch(updateConfigList(dataList))

       
    }catch(e){
        console.error(e)
        
    }

}

export const addNewConfig = (obj) => async(dispatch, getState) =>{
    try{
        await addDoc(CollectionRef, obj).then((docRef) => {
            console.log("Document written with ID: ", docRef?.id);
            dispatch(getConfigList())
            dispatch(updateToast({showToast:true,content:"ADDED SUCCESSFULLY."}))
        })
        .catch((error)=> {
            console.error("Error adding document: ", error);
        });
    } catch(err) {
        console.error("add config Error:", err)
    }
}

export const updateConfig =(newObj) => async(dispatch, getState) =>{
    const userDoc = doc(db, DB.configList, newObj.id);
    await updateDoc(userDoc, newObj).then((data)=>{
        dispatch(updateToast({showToast:true,content:"ADDED SUCCESSFULLY."}))
        dispatch(getConfigList())
    }).catch((error)=> {
        console.error("Error adding document: ", error);
    });
}

const updateConfigList = (data) =>{
    return {
        type: UPDATE_CONFIG_LIST,
        data
    }
}

export const updateToast = (data) =>{
    return {
        type: UPDATE_TOAST,
        data
    }
}