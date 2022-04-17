import React, { useContext } from "react"
import s from "./About.module.scss"
import shared from "../../styles/shared.module.scss"
import { AboutItems } from "./components/Items/AboutItems"
import { PDFButton } from "./components/PDF/PDFButton"
import photo from "../../assets/img/about.jpg"
import Context from "../../context"

export const About = props => {
    const { language } = useContext(Context)

    return (
        <section className={`${s.about} ${shared.section}`} id="about">
            <h2 className={shared.section__title}>
                {language === 1 ? "About me" : "Обо мне"}
            </h2>
            <span className={shared.section__subtitle}></span>
            <div
                className={`${s.container} ${shared.container} ${shared.grid}`}
            >
                <img src={photo} alt="about" className={s.img} />
                <div className={s.data}>
                    <div className={s.description}>
                        {language === 1
                            ? "Web-developer, currently without expirience in the company."
                            : "Веб-разработчик, на данных момент без опыта работы в компании. "}
                        <p>
                            {language === 1
                                ? "My main destinations:"
                                : "Мои основные направления:"}
                        </p>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <AboutItems language={language} />
                    <PDFButton language={language} />
                </div>
            </div>
        </section>
    )
}
