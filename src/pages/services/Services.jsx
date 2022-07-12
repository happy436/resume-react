import React, { useContext } from "react"
import { UilBrowser, UilCube } from "@iconscout/react-unicons"
import s from "./Services.module.scss"
import v from "../../styles/shared.module.scss"
import { Service } from "./Service"
import Context from "../../context"

export const Services = () => {
    const { language } = useContext(Context)

    const servicesList = [
        {
            title: language === 1 ? "Website development" : "Создание сайта",
            icon: <UilBrowser className={s.icon} />,
            services: [
                { item: language === 1 ? "Web page development" : "Верстка" },
                {
                    item:
                        language === 1
                            ? "Adaptation for mobile devices"
                            : "Адаптация под мобильные устройства"
                },
                {
                    item:
                        language === 1
                            ? "Crossbrowser compatibility"
                            : "Кроссбраузерность"
                },
                {
                    item:
                        language === 1
                            ? "Transfer from native technology to react, redux"
                            : "Перенос с HTML, CSS, JS на React, Redux"
                },
                {
                    item:
                        language === 1
                            ? "Adding functionality to an existing project"
                            : "Добавление функционала в существующий проект"
                },
                { item: language === 1 ? "Consultation" : "Консультация" }
            ]
        },
        {
            title:
                language === 1
                    ? "Creation of 3D, drawings"
                    : "Создание 3D,чертежей",
            icon: <UilCube className={s.icon} />,
            services: [
                {
                    item:
                        language === 1
                            ? "Creation of 3D models with load analysis"
                            : "Создание 3D моделей с расчетом нагрузок"
                },
                {
                    item:
                        language === 1
                            ? "Creation of drawings accroding to the USDD"
                            : "Создание чертежей по ЕСКД"
                },
                {
                    item:
                        language === 1
                            ? "Digitization of drawings"
                            : "Оцифровка чертежей"
                },
                {
                    item:
                        language === 1
                            ? "Creation of models according to the drawing"
                            : "Создание моделей по чертежу"
                },
                {
                    item:
                        language === 1
                            ? "Training to work in Inventor, Solidworks"
                            : "Обучение работе в Inventor, Solidworks, KOMPAS-3D"
                },
                { item: language === 1 ? "Consultation" : "Консультация" }
            ]
        }
    ]

    const servicesElement = servicesList.map(item => {
        return (
            <Service
                key={item.title}
                title={item.title}
                icon={item.icon}
                services={item.services}
            />
        )
    })

    return (
        <section className={`${s.services} ${v.section}`}>
            <h2 className={v.section__title}>
                {language === 1 ? "Services" : "Сервисы"}
            </h2>
            <span className={v.section__subtitle}>
                {language === 1 ? "What i offer" : "Что я предлогаю"}
            </span>
            <div className={`${s.container} ${v.container} ${v.grid}`}>
                {servicesElement}
            </div>
        </section>
    )
}
