import React, { useContext } from "react"
import s from "./Footer.module.scss"
import v from "../../styles/shared.module.scss"
import {
    UilInstagram,
    UilFacebookF,
    UilTelegramAlt,
    UilGithubAlt
} from "@iconscout/react-unicons"
import { NavLink } from "react-router-dom"
import Context from "../../context"

export const Footer = props => {
    const { baseURL, language } = useContext(Context)
    return (
        <footer className={s.footer}>
            <section className={s.footer__bg}>
                <div
                    className={`${s.footer__container} ${v.container} ${v.grid}`}
                >
                    <div>
                        <h1 className={s.footer__title}>
                            {language === 1 ? "Oleg" : "Олег"}
                        </h1>
                        <span className={s.footer__subtitle}>
                            Front-end{" "}
                            {language === 1 ? "developer" : "разработчик"}
                        </span>
                    </div>

                    <ul className={s.footer__links}>
                        <li>
                            <NavLink
                                to={`${baseURL}/services`}
                                className={s.footer__link}
                            >
                                {language === 1 ? "Services" : "Сервисы"}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`${baseURL}/contact-me`}
                                className={s.footer__link}
                            >
                                {language === 1 ? "Contacts" : "Контакты"}
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={s.footer__socials}>
                        <li>
                            <a
                                href="https://www.instagram.com/lelouch436/"
                                rel="noreferrer"
                                target="_blank"
                                className={s.footer__social}
                            >
                                <UilInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/profile.php?id=100006441279823"
                                rel="noreferrer"
                                target="_blank"
                                className={s.footer__social}
                            >
                                <UilFacebookF />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://t.me/happy436"
                                rel="noreferrer"
                                target="_blank"
                                className={s.footer__social}
                            >
                                <UilTelegramAlt />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/happy436?tab=repositories"
                                rel="noreferrer"
                                target="_blank"
                                className={s.footer__social}
                            >
                                <UilGithubAlt />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
