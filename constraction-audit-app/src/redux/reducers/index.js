import appConfig from './appConfig';
import toast from './toast';
import entry from './entry';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
     appConfig,
     toast,
     entry
})

export default rootReducer;

