import { db } from "../../firebase-config";
import { UPDATE_ENTRY_LIST, UPDATE_TOAST } from '../../config/actions';

import { DB } from '../../config/constants'
import {
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc
} from "firebase/firestore";
import { async } from '@firebase/util';
const CollectionRef = collection(db, DB.entyrList);
export const getEntryList = () => async(dispatch, getState) =>{
    try{
        
        const data = await getDocs(CollectionRef);
        let dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log('data list:', dataList)
        dispatch(updateEntryList(dataList))

       
    }catch(e){
        console.error(e)
        
    }

}

export const addNewEntry = (obj) => async(dispatch, getState) =>{
    try{
        await addDoc(CollectionRef, obj).then((docRef) => {
            console.log("Document written with ID: ", docRef?.id);
            dispatch(getEntryList())
            dispatch(updateToast({showToast:true,content:"ADDED SUCCESSFULLY."}))
        })
        .catch((error)=> {
            console.error("Error adding document: ", error);
        });
    } catch(err) {
        console.error("add entry Error:", err)
    }
}

const updateEntryList = (data) =>{
    return {
        type: UPDATE_ENTRY_LIST,
        data
    }
}

export const updateToast = (data) =>{
    return {
        type: UPDATE_TOAST,
        data
    }
}

export const updateEntry =(newObj) => async(dispatch, getState) =>{
    const userDoc = doc(db, DB.entyrList, newObj.id);
    await updateDoc(userDoc, newObj).then((data)=>{
        dispatch(updateToast({showToast:true,content:"Updated SUCCESSFULLY."}))
        dispatch(getEntryList())
    }).catch((error)=> {
        console.error("Error adding document: ", error);
    });
}