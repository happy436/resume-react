import React from 'react'
import { UilBrowser , UilCube  } from '@iconscout/react-unicons'
import s from "./Services.module.scss"
import v from "../../styles/shared.module.scss"
import { Service } from './Service'

export const Services = () => {
    const services_list = [
        {title:"Создание сайта",
        icon:<UilBrowser  className={s.icon} />,
        services:[
            {item:"Верстка"},
            {item:"Адаптация под мобильные устройства"},
            {item:"Кроссбраузерность"},
            {item:"Перенос с HTML, CSS, JS на React, Redux"},
            {item:"Консультация"}
            ]
        },
        {title:"Создание 3D,чертежей",
        icon:<UilCube  className={s.icon} />,
        services:[
            {item:"Создание 3D моделей с расчетом нагрузок"},
            {item:"Создание чертежей по ЕСКД"},
            {item:"Оцифровка чертежей"},
            {item:"Создание моделей по чертежу"},
            {item:"Обучение работе в Inventor, Solidworks, KOMPAS-3D"},
            {item:"Консультация"}
            ]
        },
    ]

    const servicesElement = services_list.map(item => {
        return(<Service key={item.title} title={item.title} icon={item.icon} services={item.services}/>)
    })

    return (
        <section className={`${s.services} ${v.section}`}>
            <h2 className={v.section__title}>Сервисы</h2>
            <span className={v.section__subtitle}>Что я предлогаю</span>
            <div className={`${s.container} ${v.container} ${v.grid}`}>
                {servicesElement}
            </div>
        </section>
    )
}
