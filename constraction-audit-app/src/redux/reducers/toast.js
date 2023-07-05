import {UPDATE_TOAST} from '../../config/actions';


const initState = {
       showToast:false,
       title: "SUCCESS",
       content:"UPDATED SUCCESSFULLY "
}

const toast = (state=initState, action) =>{
    switch(action.type) {
        
        case UPDATE_TOAST :{
            return {...state, ...action.data}
        }
               
        default :{
            return { ...state}
        }
    }

}

export default toast;