import { combineReducers, createStore } from "redux";
import themeReducer from "./themeReducer"
import languageReducer from "./languageReducer"


const persistedState = localStorage.getItem('reduxState')
                        ? JSON.parse(localStorage.getItem('reduxState')) : {}

let reducers = combineReducers(
    {
        themeReducer,
        languageReducer, 
        
    });

let store = createStore(reducers, persistedState);

export default store;