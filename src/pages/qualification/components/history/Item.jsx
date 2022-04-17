import React from "react"
import { UilCalendarAlt } from "@iconscout/react-unicons"
import s from "../../Qualification.module.scss"

export const Item = props => {
    const { index, arr_length, title, subtitle, calendar } = props

    if (index % 2 === 0) {
        if (index === arr_length) {
            return (
                <div className={s.data}>
                    <div className={s.history__item}>
                        <h3 className={s.title}>{title}</h3>
                        <span className={s.subtitle}>{subtitle}</span>
                        <div className={s.calendar}>
                            <UilCalendarAlt />
                            {calendar}
                        </div>
                    </div>
                    <div>
                        <span className={s.rounder}></span>
                    </div>
                    <div></div>
                </div>
            )
        }
        return (
            <div className={s.data}>
                <div className={s.history__item}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.subtitle}>{subtitle}</span>
                    <div className={s.calendar}>
                        <UilCalendarAlt />
                        {calendar}
                    </div>
                </div>
                <div>
                    <span className={s.rounder}></span>
                    <span className={s.line}></span>
                </div>
                <div></div>
            </div>
        )
    } else if (index % 2 === 1) {
        if (index === arr_length) {
            return (
                <div className={s.data}>
                    <div></div>
                    <div>
                        <span className={s.rounder}></span>
                    </div>
                    <div className={s.history__item}>
                        <h3 className={s.title}>{title}</h3>
                        <span className={s.subtitle}>{subtitle}</span>
                        <div className={s.calendar}>
                            <UilCalendarAlt />
                            {calendar}
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className={s.data}>
                <div></div>
                <div>
                    <span className={s.rounder}></span>
                    <span className={s.line}></span>
                </div>
                <div className={s.history__item}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.subtitle}>{subtitle}</span>
                    <div className={s.calendar}>
                        <UilCalendarAlt />
                        {calendar}
                    </div>
                </div>
            </div>
        )
    }
}
