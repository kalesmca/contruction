import appConfig from './appConfig';
import toast from './toast';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
     appConfig,
     toast
})

export default rootReducer;

