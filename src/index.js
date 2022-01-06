import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Header } from './shared/header/Header';
import { Footer } from './shared/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/redux-store"

const baseURL = "/resume-react"

let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Header baseURL={baseURL}/>
                <App store={store} baseURL={baseURL}/>
                <Footer baseURL={baseURL}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState())

store.subscribe(() => {
    let state = localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    reRender(state);
})