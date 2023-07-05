import {getDataListByDBName} from '../API/apiService';
import { db } from "../../firebase-config";
import { UPDATE_CONFIG_LIST } from '../../config/actions';

import { DB } from '../../config/constants'
import {
    collection,
    getDocs,
    addDoc
} from "firebase/firestore";
import { async } from '@firebase/util';
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
        })
        .catch((error)=> {
            console.error("Error adding document: ", error);
        });
    } catch(err) {
        console.error("add config Error:", err)
    }
}

const updateConfigList = (data) =>{
    return {
        type: UPDATE_CONFIG_LIST,
        data
    }
}