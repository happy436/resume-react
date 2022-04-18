import { combineReducers, createStore } from "redux"
import themeReducer from "./themeReducer"
import languageReducer from "./languageReducer"

const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {}

const reducers = combineReducers({
    themeReducer,
    languageReducer
})

const store = createStore(reducers, persistedState)

export default store
