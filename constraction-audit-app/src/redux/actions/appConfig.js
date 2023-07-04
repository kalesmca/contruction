import {getDataListByDBName} from '../API/apiService';
import { db } from "../../firebase-config";

import { DB } from '../../config/constants'
import {
    collection,
    getDocs,
    addDoc
} from "firebase/firestore";
export const getConfigList = () => async(dispatch, getState) =>{
    try{
        const CollectionRef = collection(db, DB.configList);
        const data = await getDocs(CollectionRef);
        let dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log('data list:', dataList)

       
    }catch(e){
        console.error(e)
        
    }

}