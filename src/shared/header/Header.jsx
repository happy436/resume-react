import React from 'react'
import { UilEstate, UilUser, UilFileAlt, UilDollarSign, UilBriefcaseAlt, UilComparison, UilMessage, UilApps, UilMoon, UilTimes, UilSun } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'
import s from "./Header.module.scss"
import shared from "../../styles/shared.module.scss"

export const Header = (props) => {

    const baseURL = props.baseURL
    const nav_items_data = [
        {
            name: "Главная",
            url: "",
            icon:<UilEstate />,
        },
        {
            name: "Обо мне",
            url: "about",
            icon:<UilUser />,
        },
        {
            name: "Навыки",
            url: "skills",
            icon:<UilFileAlt />,
        },
        {
            name: "Квалификация",
            url: "qualification",
            icon:<UilComparison />,
        },
        {
            name: "Сервис",
            url: "services",
            icon:<UilDollarSign />,
        },
        {
            name: "Портфолио",
            url: "portfolio",
            icon:<UilBriefcaseAlt />,
        },
        {
            name: "Контакты",
            url: "contact-me",
            icon:<UilMessage />,
        },
    ]
    const nav_item_el = nav_items_data.map((item, index) => {
        return(
        <li className={s.nav__item}>
            <NavLink to={`${baseURL}/${item.url}`} className={({ isActive }) => isActive ? `${s.nav__link} ${s.active_link}` : s.nav__link}>
                {item.icon} {item.name}
            </NavLink>
        </li>
        )
    })

    return (
        <header className={s.header} id="header">
            <nav className={`${s.nav} ${shared.container}`}>
                <NavLink to={`${baseURL}/`} className={s.nav__logo}>Oleg</NavLink>
                <div className={s.nav__menu} id="nav-menu">
                    <ul className={`${s.nav__list} ${shared.grid}`}>
                        {nav_item_el}
                    </ul>
                    <UilTimes />
                </div>

                <div className={s.nav__btns}>
                    {/* Theme change button */}
                    {/* localStorage.getItem('theme') === 'dark-theme' ? <UilSun/> : <UilMoon />*/}
                    <UilMoon />
                    <div className={s.nav__toggle} id="nav-toggle">
                        <UilApps />
                    </div>
                </div>
            </nav>
        </header>
    )
}
