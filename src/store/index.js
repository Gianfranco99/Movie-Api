import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index.js";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' 

const persistConfig = { // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
  whitelist: ["movies"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(
  persistedReducer,
    compose(applyMiddleware(thunk))
);
  
export const  persistor = persistStore(store)
// store.subscribe( function () {
//   saveState(store.getState())
// })
  
  export default store;