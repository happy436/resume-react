import React from 'react'
import s from "./Home.module.scss"
import v from "../../styles/shared.module.scss"
import { UilInstagram, UilFacebookF, UilTelegramAlt, UilGithubAlt, UilMessage } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'
import photo from "../../assets/img/main_photo.jpg"

export const Home = (props) => {
    return (
        <section className={`${v.section}`} id="home">
            <div className={`${s.container} ${v.container} ${v.grid}`}>
                <div className={`${s.content} ${v.grid}`}>
                    <div className={s.social}>
                        <a href="https://www.instagram.com/lelouch436/" rel="noreferrer" target="_blank" className={s.social_icon}>
                            <UilInstagram/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100006441279823" rel="noreferrer" target="_blank" className={s.social_icon}>
                            <UilFacebookF/>
                        </a>
                        <a href="https://t.me/happy436" rel="noreferrer" target="_blank" className={s.social_icon}>
                            <UilTelegramAlt/>
                        </a>
                        <a href="https://github.com/happy436?tab=repositories" rel="noreferrer" target="_blank" className={s.social_icon}>
                            <UilGithubAlt/>
                        </a>
                    </div>
                    <div className={s.img}>
                        <svg className={s.blob} viewBox="0 0 200 187" >
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                <image className={s.blob_img} 
                                alt="ava" 
                                y="-50"
                                xlinkHref={photo}/>
                            </g>
                        </svg>
                    </div>
                    <div className={s.data}>
                        <h1 className={s.title}>{props.language === 1 ? "Hi, i'm Oleg" : "Привет, я Олег"}</h1>
                        <h3 className={s.subtitle}>Front-end {props.language === 1 ? "developer" : "разработчик"}</h3>
                        <p className={s.description}>{props.language === 1 ? "Beginner level experience in web" : "Опыт работы в вебе на начальном уровне"}</p>
                        <NavLink to={`${props.baseURL}/contact-me`} className={`${v.button} ${v.button__flex}`}>
                            {props.language === 1 ? "Contacts" : "Контакты"}<UilMessage className={v.button__icon}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
