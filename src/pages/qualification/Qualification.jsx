import React from 'react'
import s from "./Qualification.module.scss"
import v from "../../styles/shared.module.scss"
import { Container } from './components/Container'
import { UilBriefcaseAlt, UilGraduationCap } from '@iconscout/react-unicons'

export const Qualification = () => {

    const qualification_data = [{
        name:"Учеба",
        data_target:"education",
        icon:<UilGraduationCap className={s.icon} />,
        data:[
            {
                title:"HTML, CSS, JS",
                subtitle:"Sololearn",
                calendar:"01.06.2020 - 28.04.2021"
            },
            {
                title:"Front-end for beginners",
                subtitle:"Web Academy",
                calendar:"28.04.2021 - 12.07.2021"
            },
            {
                title:"Junior Frontend Developer",
                subtitle:"Vladilen Inc",
                calendar:"03.01.2022 - 03.05.2022"
            },
        ]
    },{
        name:"Работа",
        data_target:"work",
        icon:<UilBriefcaseAlt className={s.icon} />,
        data:[
            {
                title:"Инженер-конструктор",
                subtitle:"FlightControl",
                calendar:"28.02.2018 - текущий момент"},
        ]
    },]
    return (
        <section className={`${s.qualification} ${v.section}`}>
            <h2 className={v.section__title}>Квалификация</h2>
            <span className={v.section__subtitle}>Моя карьера</span>
            <div className={`${s.container} ${v.container}`}>
                <Container data={qualification_data}/>
            </div>
        </section>
    )
}
