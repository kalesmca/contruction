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


export const  getUserList = async() =>{
  const usersCollectionRef = collection(db, DB.USERS);

  const data = await getDocs(usersCollectionRef);
  const dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataList;
      
}

export const  updateUser = async(newObj) =>{
    const userDoc = doc(db, DB.players, newObj.id);
    await updateDoc(userDoc, newObj); 
  
     
}

export const  updateEvent = async(newObj) =>{
  const userDoc = doc(db, DB.EVENTS, newObj.id);
  await updateDoc(userDoc, newObj); 

   
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