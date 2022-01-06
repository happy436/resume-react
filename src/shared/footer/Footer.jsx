import React from 'react'
import s from "./Footer.module.scss"
import v from "../../styles/shared.module.scss"
import { UilInstagram, UilFacebookF, UilTelegramAlt, UilGithubAlt, UilMessage } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'

export const Footer = (props) => {

    const baseURL = props.baseURL
    return (
        <footer className={s.footer}>
            <div className={s.footer__bg}>
                <div className={`${s.footer__container} ${v.container} ${v.grid}`}>
                    <div>
                        <h1 className={s.footer__title}>Олег</h1>
                        <span className={s.footer__subtitle}>Front-end dev</span>
                    </div>

                    <ul className={s.footer__links}>
                        <li>
                            <NavLink to={`${baseURL}/services`} className={s.footer__link}>Сервисы</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${baseURL}/contact-me`} className={s.footer__link}>Контакты</NavLink>
                        </li>
                    </ul>
                    <div className={s.footer__socials}>
                        <a href="https://www.instagram.com/lelouch436/" rel="noreferrer" target="_blank" className={s.footer__social}>
                            <UilInstagram />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100006441279823" rel="noreferrer" target="_blank" className={s.footer__social}>
                            <UilFacebookF />
                        </a>
                        <a href="https://t.me/happy436" rel="noreferrer" target="_blank" className={s.footer__social}>
                            <UilTelegramAlt />
                        </a>
                        <a href="https://github.com/happy436?tab=repositories" rel="noreferrer" target="_blank" className={s.footer__social}>
                            <UilGithubAlt />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}
