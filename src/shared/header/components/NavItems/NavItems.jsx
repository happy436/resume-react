import React from 'react'
import { UilEstate, UilUser, UilFileAlt, UilDollarSign, UilBriefcaseAlt, UilComparison, UilMessage, UilApps, UilMoon, UilTimes, UilSun } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'
import s from "../../Header.module.scss"
import shared from "../../../../styles/shared.module.scss"

export const NavItems = (props) => {

    const baseURL = props.baseURL
    const nav_items_data = [
        {
            name: "Главная",
            url: "",
            icon: <UilEstate className={s.nav__icon}/>,
        },
        {
            name: "Обо мне",
            url: "about",
            icon: <UilUser className={s.nav__icon}/>,
        },
        {
            name: "Навыки",
            url: "skills",
            icon: <UilFileAlt className={s.nav__icon}/>,
        },
        {
            name: "Квалификация",
            url: "qualification",
            icon: <UilComparison className={s.nav__icon}/>,
        },
        {
            name: "Сервис",
            url: "services",
            icon: <UilDollarSign className={s.nav__icon}/>,
        },
        {
            name: "Портфолио",
            url: "portfolio",
            icon: <UilBriefcaseAlt className={s.nav__icon}/>,
        },
        {
            name: "Контакты",
            url: "contact-me",
            icon: <UilMessage className={s.nav__icon}/>,
        },
    ]
    const nav_item_el = nav_items_data.map((item, index) => {
        return (
            <li key={item.name} className={s.nav__item}>
                <NavLink onClick={props.toggleMenu} to={`${baseURL}/${item.url}`} className={({ isActive }) => isActive ? `${s.nav__link} ${s.active_link}` : s.nav__link}>
                    {item.icon} {item.name}
                </NavLink>
            </li>
        )
    })
    return (
        <ul className={`${s.nav__list} ${shared.grid}`}>
            {nav_item_el}
        </ul>
    )
}
