
import {UPDATE_PLAYERS,UPDATE_AUTH_STATUS} from '../../config/actions';
import { db } from "../../firebase-config";
import {DB} from '../../config/constants';

import {
    collection,
    getDocs,
    addDoc
} from "firebase/firestore";
import { batch } from 'react-redux';

import { async } from "@firebase/util";

const playersCollectionRef = collection(db, DB.players);

export const getPlayerList = () => async (dispatch, getState) => {
    try {
        const data = await getDocs(playersCollectionRef);
        let dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log('data list:', dataList)

        const localAuth = JSON.parse(localStorage.getItem("auth"));
        const regPlayerList = dataList.filter((data)=> data.registerMobile === localAuth.mobile)
        
        dispatch(updatePlayerList(dataList, regPlayerList))
    }
    catch (error) {
        console.log('getEventList : error:', error);
    }

}

export const addPlayer = (obj) => async (dispatch, getState) => {
    try {
        await addDoc(playersCollectionRef, obj);
    }
    catch (error) {
        console.log('error:', error);
    }
}


export const updatePlayerList = (data, regPlayerList) => {
    return {
        type: UPDATE_PLAYERS,
        data: data,
        regPlayerList:regPlayerList
    }
}

export const setAuthStatus = (status) =>{
    return{
        type:UPDATE_AUTH_STATUS,
        data: status
    }
}

