import { Route, Routes } from 'react-router';
import { About } from './pages/about/About';
import { ContactMe } from './pages/contactMe/ContactMe';
import { Home } from './pages/home/Home';
import { Portfolio } from './pages/portfolio/Portfolio';
import { Qualification } from './pages/qualification/Qualification';
import { Services } from './pages/services/Services';
import { Skills } from './pages/skills/Skills';
import s from "./App.module.scss"

function App(props) {

    const baseURL = props.baseURL

    return (
        <main className={s.main}>
            <Routes>
                <Route path={`${baseURL}/`} element={<Home language={props.state.activeLanguage} baseURL={baseURL}/>} />
                <Route path={`${baseURL}/about`} element={<About language={props.state.activeLanguage}/>} />
                <Route path={`${baseURL}/skills`} element={<Skills language={props.state.activeLanguage}/>} />
                <Route path={`${baseURL}/qualification`} element={<Qualification language={props.state.activeLanguage}/>} />
                <Route path={`${baseURL}/services`} element={<Services language={props.state.activeLanguage}/>} />
                <Route path={`${baseURL}/portfolio`} element={<Portfolio language={props.state.activeLanguage}/>} />
                <Route path={`${baseURL}/contact-me`} element={<ContactMe language={props.state.activeLanguage}/>} />
            </Routes>
        </main>
    );
}

export default App;
