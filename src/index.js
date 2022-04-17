import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import { Header } from "./shared/header/Header"
import { Footer } from "./shared/footer/Footer"
import { BrowserRouter } from "react-router-dom"
import store from "./redux/redux-store"
import Context from "./context"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9FDBajB-cyH4vY5gojOBzjuiVWuDTr4E",
    authDomain: "resume-react-29acd.firebaseapp.com",
    projectId: "resume-react-29acd",
    storageBucket: "resume-react-29acd.appspot.com",
    messagingSenderId: "219310398984",
    appId: "1:219310398984:web:b8bb31bf60d8104266bbbd",
    measurementId: "G-PXL8RMWTLD"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app) // eslint-disable-line no-unused-vars

const baseURL = ""

function Main() {
    return (
        <React.StrictMode>
            <Context.Provider
                value={{
                    theme: store.getState().themeReducer.activeTheme,
                    language: store.getState().languageReducer.activeLanguage,
                    baseURL,
                    dispatch: store.dispatch
                }}
            >
                <BrowserRouter>
                    <Header
                    /* language={store.getState().languageReducer.activeLanguage}
                        baseURL={baseURL}
                        dispatch={store.dispatch}
                        theme={store.getState().themeReducer.activeTheme} */
                    />
                    <App
                    /* state={store.getState().languageReducer}
                        baseURL={baseURL} */
                    />
                    <Footer
                    /* language={store.getState().languageReducer.activeLanguage}
                        baseURL={baseURL} */
                    />
                </BrowserRouter>
            </Context.Provider>
        </React.StrictMode>
    )
}

const reRender = state => {
    ReactDOM.render(<Main />, document.getElementById("root"))
}

reRender(store.getState())

store.subscribe(() => {
    const state = localStorage.setItem(
        "reduxState",
        JSON.stringify(store.getState())
    )
    reRender(state)
})
