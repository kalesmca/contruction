import {UPDATE_PLAYERS,UPDATE_AUTH_STATUS} from '../../config/actions';


const initState = {
        playerList: [],
        regPlayerList:[],
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