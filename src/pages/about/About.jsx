import React from 'react'
import s from "./About.module.scss"
import shared from "../../styles/shared.module.scss"
import { About_items } from './components/About_items/About_items'

export const About = () => {
    return (
        <section className={s.about + shared.section} id="about">
            <h2 className={shared.section__title}>Обо мне</h2>
            <span className={shared.section__subtitle}></span>
            <div className={s.about__container + shared.container + shared.grid}>
                <img src="./img/about-light.jpg" alt="about" className={s.about__img}/>
                <div className={s.about__data}>
                    <p className={s.about__description}>
                        Тренер-универсал большим спектром навыков в спортивной сфере. 
                        Работаю в групповых направлениях и в тренажерном зале.<br/>
                        Мои основные направления:
                        <br/>- Fitness
                        <br/>- Stretching
                        <br/>- Fly yoga / Fly stretching
                    </p>
                    <About_items/>
                </div>
            </div>
        </section>
    )
}
