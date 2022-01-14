import React from 'react'
import s from "./ContactMe.module.scss"

export const ContactInfo = (props) => {

    const {link, title, subtitle, icon} = props

    return (
        <div className={s.contact__information}>
            <a href={link} target="_blank" className={s.contact__information}>
                {icon}
                <div>
                    <h3 className={s.contact__title}>{title}</h3>
                    <span className={s.contact__subtitle}>{subtitle}</span>
                </div>
            </a>
        </div>
    )
}
