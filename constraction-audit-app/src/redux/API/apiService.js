// import axios from "axios";
import { db } from "../../firebase-config";
import {DB} from '../../config/constants';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
import { async } from "@firebase/util";


export const  getDataListByDBName =(dbName)=> async() =>{
  const collectionRef = collection(db, dbName);

  const data = await getDocs(collectionRef);
  const dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataList;
      
}

export const  updateConfig = async(newObj) =>{
    const userDoc = doc(db, DB.configList, newObj.id);
    await updateDoc(userDoc, newObj); 
  
     
}

export const  updateEvent = async(newObj) =>{
  const userDoc = doc(db, DB.EVENTS, newObj.id);
  await updateDoc(userDoc, newObj); 

  
}

export const deleteConfigByDoc = async(obj) =>{
  const configDocument = doc(db, DB.configList, obj.id);
  await db.collection(DB.configList).doc(configDocument).delete(); 
}

export const deleteEntryByDoc = async(obj) =>{
  const configDocument = doc(db, DB.entyrList, obj.id);
  // await db.collection(DB.entyrList).doc(configDocument).delete(); 
  await deleteDoc(configDocument, obj); 

}


// const ApiService ={
//     saveFund: async(param) =>{
//         await axios.post('http://localhost:3000/customers', {
//             firstName: 'Fred',
//             lastName: 'Flintstone'
//           })
//           .then(function (response) {
//             console.log(response);
//             return response;
//           })
//           .catch(function (error) {
//             console.log(error);
//             return error;
//           });
//     },
//     getUserList:async() =>{

//     }

// }

// export default ApiService;