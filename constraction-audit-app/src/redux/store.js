import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));  //local storage overridded


export default store;