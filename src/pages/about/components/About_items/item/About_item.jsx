import React from 'react'
import s from "./About_item.module.scss"

export const About_item = (props) => {
    
    const {count,name} = props
    return (
        <div className={s.about__info_item}>
            <div className={s.about__info_wrapper}>
                <span className={s.about__info_title}>0</span>
                <span className={s.about__info_title + s.count}>{count}</span>
                <span className={s.about__info_title}>+</span>
            </div>
            <span className={s.about__info_name}>{name}</span>
        </div>
    )
}
