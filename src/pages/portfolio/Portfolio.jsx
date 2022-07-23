import React, { useContext } from "react"
import v from "../../styles/shared.module.scss"
import s from "./Portfolio.module.scss"
import { Slider } from "./slider/Slider"
import demo1 from "../../assets/demo/1.PNG"
import demo3 from "../../assets/demo/3.PNG"
import demo4 from "../../assets/demo/4.PNG"
import demo5 from "../../assets/demo/5.PNG"
import Context from "../../context"

export const Portfolio = props => {
    const { language } = useContext(Context)

    const data = [
        {
            img: demo4,
            title: "Note-app",
            description:
                language === 1
                    ? "Create, clear to-do lists to easily manage your ideas and work so you never forget anything again."
                    : "Создавайте четкие списки дел, чтобы легко управлять своими идеями и работать, чтобы больше никогда ничего не забыть.",
            link: "https://notes-react-4beaa.web.app/"
        },
        {
            img: demo5,
            title: language === 1 ? "Random gallery" : "Рандомная галерея",
            description:
                language === 1
                    ? "Random images from Unsplash"
                    : "Случайные картинки с Unsplash",
            link: "https://happy436.github.io/Unsplash-Image/"
        },
        {
            img: demo1,
            title: language === 1 ? "Weather App" : "Приложение погода",
            description:
                language === 1
                    ? "Simple weather-app with API"
                    : "Простенькое приложение погода и использование API",
            link: "https://happy436.github.io/weather-react/"
        },
        {
            img: demo3,
            title: language === 1 ? "Clock App" : "Приложение часы",
            description:
                language === 1
                    ? "Clock app with multiple color styles and functionalities, from analog to calendar"
                    : "Приложение часов с несколькими цветовыми стилями и функциями, от аналоговых до календаря",
            link: "https://happy436.github.io/clocks-react/"
        }
    ]

    return (
        <section className={`${s.portfolio} ${v.section}`}>
            <h2 className={v.section__title}>
                {language === 1 ? "Portfolio" : "Портфолио"}
            </h2>
            <span className={v.section__subtitle}>
                {language === 1 ? "Most recent work" : "Самые последние работы"}
            </span>
            <div className={`${s.portfolio__container} ${v.container}`}>
                <Slider data={data} />
            </div>
        </section>
    )
}
