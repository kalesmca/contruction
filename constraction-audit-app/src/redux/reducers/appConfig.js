import {UPDATE_CONFIG_LIST} from '../../config/actions';


const initState = {
       default:{
        data: "default"
       }
}

const appConfig = (state=initState, action) =>{
    switch(action.type) {
        
        case UPDATE_CONFIG_LIST :{
            return {...state}
        }
               
        default :{
            return { ...state}
        }
    }

}

export default appConfig;