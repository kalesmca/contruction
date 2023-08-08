import {UPDATE_ENTRY_LIST} from '../../config/actions';


const initState = {
       entryList:[]
}

const entry = (state=initState, action) =>{
    switch(action.type) {
        
        case UPDATE_ENTRY_LIST :{
            return {...state, entryList:action.data}
        }
               
        default :{
            return { ...state}
        }
    }

}

export default entry;