import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Header } from './shared/header/Header';
import { Footer } from './shared/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store"

let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Header />
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
            <Footer />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState())

store.subscribe(() => {
    let state = localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    reRender(state);
})