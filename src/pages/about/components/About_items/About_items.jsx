import React from 'react'
import s from "./About_items.module.scss"
import { About_item } from './item/About_item'

export const About_items = () => {
    return (
        <div className={s.about__info_items}>
            <About_item count={5} name={`Опыт работы`}/>
            <About_item count={4} name={'Работала в залах'}/>
            <About_item count={4} name={'Работала в залах'}/>
        </div>
    )
}
