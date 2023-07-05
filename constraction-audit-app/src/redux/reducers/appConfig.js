import {UPDATE_CONFIG_LIST} from '../../config/actions';


const initState = {
       configList:[]
}

const appConfig = (state=initState, action) =>{
    switch(action.type) {
        
        case UPDATE_CONFIG_LIST :{
            return {...state, configList:action.data}
        }
               
        default :{
            return { ...state}
        }
    }

}

export default appConfig;