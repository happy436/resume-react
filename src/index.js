import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import { Header } from "./shared/header/Header"
import { Footer } from "./shared/footer/Footer"
import { BrowserRouter } from "react-router-dom"
import store from "./redux/redux-store"
import Context from "./context"

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
                    <Header />
                    <App />
                    <Footer />
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
