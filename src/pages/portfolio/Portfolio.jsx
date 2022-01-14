import React from 'react'
import v from "../../styles/shared.module.scss"
import s from "./Portfolio.module.scss"
import { Slider } from './slider/Slider'
import demo1 from "../../assets/demo/1.PNG"
import demo2 from "../../assets/demo/2.PNG"
import demo3 from "../../assets/demo/3.PNG"
import demo4 from "../../assets/demo/4.PNG"

export const Portfolio = () => {

    const data = [
        {
            img: demo1,
            title: "Weather App",
            description: "Simple weather-app with API",
            link: "https://happy436.github.io/weather-react/"
        },
        {
            img: demo2,
            title: "To-do App",
            description: "Create, clear to-do lists to easily manage your ideas and work from anywhere so you never forget anything again.",
            link: "https://happy436.github.io/todo-app-react/"
        },
        {
            img: demo3,
            title: "Clock App",
            description: "Clock app with multiple color styles and functionalities, from analog to calendar",
            link: "https://happy436.github.io/todo-app-react/"
        },
        {
            img: demo4,
            title: "Simple slider",
            description: "Simple slider with fetch",
            link: "https://happy436.github.io/slider-react/"
        },
    ]

    return (
        <section className={`${s.portfolio} ${v.section}`}>
            <h2 className={v.section__title}>Portfolio</h2>
            <span className={v.section__subtitle}>Most recent work</span>
            <div className={`${s.portfolio__container} ${v.container}`}>
                <Slider data={data} />
            </div>
        </section>
    )
}
