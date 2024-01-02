import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { save, load } from "redux-localstorage-simple"

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));  //local storage overridded





// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));  //local storage overridded


// export default store;

// Import the necessary methods for saving and loading

/*
    Saving to LocalStorage is achieved using Redux 
    middleware. The 'save' method is called by Redux 
    each time an action is handled by your reducer.
*/    
const createStoreWithMiddleware 
    = applyMiddleware(
        ReduxThunk,save() // Saving done here
    )(createStore)
    
/*
    Loading from LocalStorage happens during
    creation of the Redux store.
*/  
const store = createStoreWithMiddleware(
    rootReducer,    
    load() // Loading done here
)  

export default store;