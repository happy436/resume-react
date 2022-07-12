import React from "react"
import { UilCalendarAlt } from "@iconscout/react-unicons"
import s from "../../Qualification.module.scss"
import PropTypes from "prop-types"

export const Item = ({ index, arrLength, title, subtitle, calendar }) => {
    if (index % 2 === 0) {
        if (index === arrLength) {
            return (
                <li className={s.data}>
                    <div className={s.history__item}>
                        <h3 className={s.title}>{title}</h3>
                        <span className={s.subtitle}>{subtitle}</span>
                        <date className={s.calendar}>
                            <UilCalendarAlt />
                            {calendar}
                        </date>
                    </div>
                    <div>
                        <span className={s.rounder}></span>
                    </div>
                    <div></div>
                </li>
            )
        }
        return (
            <li className={s.data}>
                <div className={s.history__item}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.subtitle}>{subtitle}</span>
                    <date className={s.calendar}>
                        <UilCalendarAlt />
                        {calendar}
                    </date>
                </div>
                <div>
                    <span className={s.rounder}></span>
                    <span className={s.line}></span>
                </div>
                <div></div>
            </li>
        )
    } else if (index % 2 === 1) {
        if (index === arrLength) {
            return (
                <li className={s.data}>
                    <div></div>
                    <div>
                        <span className={s.rounder}></span>
                    </div>
                    <div className={s.history__item}>
                        <h3 className={s.title}>{title}</h3>
                        <span className={s.subtitle}>{subtitle}</span>
                        <date className={s.calendar}>
                            <UilCalendarAlt />
                            {calendar}
                        </date>
                    </div>
                </li>
            )
        }
        return (
            <li className={s.data}>
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
            </li>
        )
    }
}

Item.propTypes = {
    index: PropTypes.number,
    arrLength: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    calendar: PropTypes.string
}
