import React, { useContext } from "react"
import s from "./Qualification.module.scss"
import v from "../../styles/shared.module.scss"
import { Container } from "./components/Container"
import { UilBriefcaseAlt, UilGraduationCap } from "@iconscout/react-unicons"
import Context from "../../context"

export const Qualification = props => {
    const { language } = useContext(Context)

    const qualificationData = [
        {
            name: language === 1 ? "Education" : "Учеба",
            dataTarget: "education",
            icon: <UilGraduationCap className={s.icon} />,
            data: [
                {
                    title: "HTML, CSS, JS",
                    subtitle: "Sololearn",
                    calendar: "01.06.2020 - 28.04.2021"
                },
                {
                    title:
                        language === 1
                            ? "Front-end for beginners"
                            : "Front-end для начинающих",
                    subtitle: "Web Academy",
                    calendar: "28.04.2021 - 12.07.2021"
                },
                {
                    title: "Junior Frontend Developer",
                    subtitle: "Vladilen Inc",
                    calendar: "03.01.2022 - 03.05.2022"
                }
            ]
        },
        {
            name: language === 1 ? "Work" : "Работа",
            data_target: "work",
            icon: <UilBriefcaseAlt className={s.icon} />,
            data: [
                {
                    title:
                        language === 1
                            ? "Design Engineer"
                            : "Инженер-конструктор",
                    subtitle: "FlightControl",
                    calendar: `28.02.2018 - ${
                        language === 1 ? "to this day" : "текущий момент"
                    }`
                }
            ]
        }
    ]
    return (
        <section className={`${s.qualification} ${v.section}`}>
            <h2 className={v.section__title}>
                {language === 1 ? "Qualification" : "Квалификация"}
            </h2>
            <span className={v.section__subtitle}>
                {language === 1 ? "My personal journey" : "Моя карьера"}
            </span>
            <div className={`${s.container} ${v.container}`}>
                <Container data={qualificationData} />
            </div>
        </section>
    )
}
