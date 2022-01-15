import React from 'react'
import s from "../Portfolio.module.scss"
import v from "../../../styles/shared.module.scss"
import { UilArrowRight } from '@iconscout/react-unicons'

export const Item = (props) => {
    const {title, description, link, img, language} = props

    return (
        <div className={`${s.portfolio__content} ${v.grid}`}>
            <img src={img} alt={'Website demo'} className={s.portfolio__img}></img>
            <div className={s.portfolio__data}>
                <h3 className={s.portfolio__title}>{title}</h3>
                <p className={s.portfolio__description}>
                    {description}
                </p>
                <a href={link} target="_blank" rel="noreferrer" className={`${v.button} ${v.button__flex} ${v.button__small} ${s.portfolio__button}`}>
                    {language === 1 ? "Demo" : "Демонстрация"}
                    <UilArrowRight className={s.button__icon} />
                </a>
            </div>
        </div>
    )
}
