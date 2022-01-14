import React from 'react'
import { UilApps, UilTimes} from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'
import s from "./Header.module.scss"
import shared from "../../styles/shared.module.scss"
import { NavItems } from './components/NavItems/NavItems'
import { ChangeTheme } from './components/changeTheme/ChangeTheme'
import { languageChangeActionCreator } from '../../redux/languageReducer'

export const Header = (props) => {
    const {baseURL, language} = props

    function toggleMenu(){
        let menu = document.getElementById("nav-menu")
        menu.classList.toggle(`${s.show_menu}`)
    }

    function Language(){
        return props.dispatch(languageChangeActionCreator())
    }

    return (
        <header className={s.header} id="header">
            <nav className={`${s.nav} ${shared.container}`}>
                <NavLink to={`${baseURL}/`} className={s.nav__logo}>{language === 1 ? "Oleg" : "Олег"}</NavLink>
                <div className={s.nav__menu} id="nav-menu">
                    <NavItems language={language} baseURL={baseURL} toggleMenu={toggleMenu}/>
                    <UilTimes className={s.nav__close} onClick={toggleMenu}/>
                </div>
                <div className={s.nav__btns}>
                    <div className={s.language_btn} onClick={Language}>{language === 1 ? "ENG" : "RU"}</div>
                    {<ChangeTheme />}
                    <div className={s.nav__toggle} onClick={toggleMenu} id="nav-toggle">
                        <UilApps />
                    </div>
                </div>
            </nav>
        </header>
    )
}
