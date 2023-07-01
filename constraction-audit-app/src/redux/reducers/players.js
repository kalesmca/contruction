import {UPDATE_PLAYERS,UPDATE_AUTH_STATUS} from '../../config/actions';
import {AUTH_STATUS} from '../../config/constants'


const initState = {
        playerList: [],
        regPlayerList:[],
        authStatus: AUTH_STATUS.PENDING
}

const players = (state=initState, action) =>{
    switch(action.type) {
        
        case UPDATE_PLAYERS :{
            return {...state, playerList:action.data, regPlayerList:action.regPlayerList}
        }
        case UPDATE_AUTH_STATUS:{
            return {...state, authStatus:action.data}
        }
        
        default :{
            return { ...state}
        }
    }

}

export default players;