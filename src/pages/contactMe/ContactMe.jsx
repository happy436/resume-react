import React, { useContext } from "react"
import v from "../../styles/shared.module.scss"
import s from "./ContactMe.module.scss"
import {
    UilInstagram,
    UilPhone,
    UilTelegramAlt,
    UilEnvelope
} from "@iconscout/react-unicons"
import { ContactInfo } from "./ContactInfo"
import Context from "../../context"

export const ContactMe = props => {
    const { language } = useContext(Context)

    const contactInformation = [
        {
            title: language === 1 ? "Write me" : "Напишите мне",
            subtitle: "www.instagram.com/lelouch436",
            icon: <UilInstagram className={s.contact__icon} />,
            link: "https://www.instagram.com/lelouch436"
        },
        {
            title: language === 1 ? "Write me" : "Напишите мне",
            subtitle: "@happy436",
            icon: <UilTelegramAlt className={s.contact__icon} />,
            link: "https://t.me/happy436"
        },
        {
            title: language === 1 ? "Email" : "Электронная почта",
            subtitle: "lelouch436@gmail.com",
            icon: <UilEnvelope className={s.contact__icon} />,
            link: "mailto:lelouch436@gmail.com"
        },
        {
            title: language === 1 ? "Call me" : "Позвоните мне",
            subtitle: "+380505758208",
            icon: <UilPhone className={s.contact__icon} />,
            link: "tel:+380505758208"
        }
    ]

    const ContactElement = contactInformation.map(item => {
        return (
            <ContactInfo
                key={item.subtitle}
                title={item.title}
                subtitle={item.subtitle}
                link={item.link}
                icon={item.icon}
            />
        )
    })

    return (
        <section className={v.section}>
            <h2 className={v.section__title}>
                {language === 1 ? "Contacts" : "Контакты"}
            </h2>
            <span className={v.section__subtitle}>
                {language === 1 ? "Get in touch" : "Связатся"}
            </span>
            <div>
                <div
                    className={`${s.contact__container} ${v.container} ${v.grid}`}
                >
                    {ContactElement}
                </div>
            </div>
        </section>
    )
}
