import React from 'react'
import { UilCalendarAlt } from '@iconscout/react-unicons'
import s from "../../Qualification.module.scss"

export const Item = (props) => {

    const {index, arr_length, title, subtitle, calendar} = props

    if (index % 2 === 0) {
        if (index === arr_length) {
            return (
                <div className={s.qualification__data}>
                    <div className={s.history__item}>
                        <h3 className={s.qualification__title}>{title}</h3>
                        <span className={s.qualification__subtitle}>{subtitle}</span>
                        <div className={s.qualification__calendar}>
                            <UilCalendarAlt />
                            {calendar}
                        </div>
                    </div>
                    <div>
                        <span className={s.qualification__rounder}></span>
                    </div>
                    <div></div>
                </div>
            )
        }
        return (
            <div className={s.qualification__data}>
                <div className={s.history__item}>
                    <h3 className={s.qualification__title}>{title}</h3>
                    <span className={s.qualification__subtitle}>{subtitle}</span>
                    <div className={s.qualification__calendar}>
                        <UilCalendarAlt />
                        {calendar}
                    </div>
                </div>
                <div>
                    <span className={s.qualification__rounder}></span>
                    <span className={s.qualification__line}></span>
                </div>
                <div></div>
            </div>
        )
    } else if (index % 2 === 1) {
        if (index === arr_length) {
            return (
                <div className={s.qualification__data}>
                    <div></div>
                    <div>
                        <span className={s.qualification__rounder}></span>
                    </div>
                    <div className={s.history__item}>
                        <h3 className={s.qualification__title}>{title}</h3>
                        <span className={s.qualification__subtitle}>{subtitle}</span>
                        <div className={s.qualification__calendar}>
                            <UilCalendarAlt />
                            {calendar}
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className={s.qualification__data}>
                <div></div>
                <div>
                    <span className={s.qualification__rounder}></span>
                    <span className={s.qualification__line}></span>
                </div>
                <div className={s.history__item}>
                    <h3 className={s.qualification__title}>{title}</h3>
                    <span className={s.qualification__subtitle}>{subtitle}</span>
                    <div className={s.qualification__calendar}>
                        <UilCalendarAlt />
                        {calendar}
                    </div>
                </div>
            </div>
        )
    }
}
