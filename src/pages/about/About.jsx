import React from 'react'
import s from "./About.module.scss"
import shared from "../../styles/shared.module.scss"
import { AboutItems } from './components/Items/AboutItems'

export const About = (props) => {

    return (
        <section className={`${s.about} ${shared.section}`} id="about">
            <h2 className={shared.section__title}>{props.language === 1 ? "About me" : "Обо мне"}</h2>
            <span className={shared.section__subtitle}></span>
            <div className={`${s.container} ${shared.container} ${shared.grid}`}>
                <img src="https://scontent.fiev19-1.fna.fbcdn.net/v/t1.18169-9/14517510_2106931546198201_8647244855771071814_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=kOtPHfTRGWsAX-bzi38&_nc_ht=scontent.fiev19-1.fna&oh=00_AT-YK7ZDrNHbXBS3QcECxFx-tQpL1WVE8G4CTOErQ-TLKQ&oe=61FC956F" alt="about" className={s.img}/>
                <div className={s.data}>
                    <p className={s.description}>
                        {props.language === 1 ? 
                        "Web-developer, currently without expirience in the company." : 
                        "Веб-разработчик, на данных момент без опыта работы в компании. "}
                        <p>{props.language === 1 ? "My main destinations:" : "Мои основные направления:"}</p>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>JavaScript</li>
                        </ul>
                    </p>
                    <AboutItems language={props.language}/>
                </div>
            </div>
        </section>
    )
}
