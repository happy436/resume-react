import React from 'react'
import v from "../../styles/shared.module.scss"
import s from "./Portfolio.module.scss"
import { Slider } from './slider/Slider'
import demo1 from "../../assets/demo/1.PNG"
import demo2 from "../../assets/demo/2.PNG"
import demo3 from "../../assets/demo/3.PNG"
import demo4 from "../../assets/demo/4.PNG"

export const Portfolio = (props) => {

    const language = props.language

    const data = [
        {
            img: demo1,
            title: language === 1 ? "Weather App" : "Приложение погода",
            description: language === 1 ? "Simple weather-app with API" : "Простенькое приложение погода и использование API",
            link: "https://happy436.github.io/weather-react/"
        },
        {
            img: demo2,
            title: language === 1 ? "To-do App" : "Приложение лист задачь",
            description: language === 1 ? "Create, clear to-do lists to easily manage your ideas and work so you never forget anything again." : "Создавайте четкие списки дел, чтобы легко управлять своими идеями и работать, чтобы больше никогда ничего не забыть.",
            link: "https://happy436.github.io/todo-app-react/"
        },
        {
            img: demo3,
            title: language === 1 ? "Clock App" : "Приложение часы",
            description: language === 1 ? "Clock app with multiple color styles and functionalities, from analog to calendar" : "Приложение часов с несколькими цветовыми стилями и функциями, от аналоговых до календаря",
            link: "https://happy436.github.io/clocks-react/"
        },
        {
            img: demo4,
            title: language === 1 ? "Simple slider" : "Простой слайдер",
            description: language === 1 ? "Simple slider with fetch request" : "Простой слайдер с fetch запросом",
            link: "https://happy436.github.io/slider-react/"
        },
    ]

    return (
        <section className={`${s.portfolio} ${v.section}`}>
            <h2 className={v.section__title}>{language === 1 ? "Portfolio" : "Портфолио"}</h2>
            <span className={v.section__subtitle}>{language === 1 ? "Most recent work" : "Самые последние работы"}</span>
            <div className={`${s.portfolio__container} ${v.container}`}>
                <Slider data={data} language={language}/>
            </div>
        </section>
    )
}
