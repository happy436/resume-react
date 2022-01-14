import React from 'react'
import s from "./AboutItems.module.scss"
import { AboutItem } from './item/AboutItem'

export const AboutItems = () => {
    return (
        <div className={s.info_items}>
            <AboutItem count={1} name={`Опыт работы`} />
            <AboutItem count={10} name={'Законченных проектов'} />
            <AboutItem count={1} name={'Работал в компаниях'} />
        </div>
    )
}
