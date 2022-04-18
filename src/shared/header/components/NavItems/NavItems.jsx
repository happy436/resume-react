import React, { useContext } from "react"
import {
    UilEstate,
    UilUser,
    UilFileAlt,
    UilDollarSign,
    UilBriefcaseAlt,
    UilComparison,
    UilMessage
} from "@iconscout/react-unicons"
import { NavLink } from "react-router-dom"
import s from "../../Header.module.scss"
import shared from "../../../../styles/shared.module.scss"
import Context from "../../../../context"
import PropTypes from "prop-types"

export const NavItems = toggleMenu => {
    const { baseURL, language } = useContext(Context)
    const navItemsData = [
        {
            name: language === 1 ? "Home" : "Главная",
            url: "",
            icon: <UilEstate className={s.nav__icon} />
        },
        {
            name: language === 1 ? "About" : "Обо мне",
            url: "about",
            icon: <UilUser className={s.nav__icon} />
        },
        {
            name: language === 1 ? "Skills" : "Навыки",
            url: "skills",
            icon: <UilFileAlt className={s.nav__icon} />
        },
        {
            name: language === 1 ? "Qualification" : "Квалификация",
            url: "qualification",
            icon: <UilComparison className={s.nav__icon} />
        },
        {
            name: language === 1 ? "Services" : "Сервис",
            url: "services",
            icon: <UilDollarSign className={s.nav__icon} />
        },
        {
            name: language === 1 ? "Portfolio" : "Портфолио",
            url: "portfolio",
            icon: <UilBriefcaseAlt className={s.nav__icon} />
        },
        {
            name: language === 1 ? "Contacts" : "Контакты",
            url: "contact-me",
            icon: <UilMessage className={s.nav__icon} />
        }
    ]
    const navItemEl = navItemsData.map(item => {
        return (
            <li key={item.name} className={s.nav__item}>
                <NavLink
                    onClick={toggleMenu}
                    to={`${baseURL}/${item.url}`}
                    className={({ isActive }) =>
                        isActive
                            ? `${s.nav__link} ${s.active_link}`
                            : s.nav__link
                    }
                >
                    {item.icon} {item.name}
                </NavLink>
            </li>
        )
    })
    return <ul className={`${s.nav__list} ${shared.grid}`}>{navItemEl}</ul>
}

NavItems.propTypes = {
    toggleMenu: PropTypes.func
}
