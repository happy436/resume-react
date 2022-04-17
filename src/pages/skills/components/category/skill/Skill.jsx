import React from "react"
import s from "../../../Skills.module.scss"

export const Skill = props => {
    const { name, percentage } = props

    return (
        <div className={s.data}>
            <div className={s.titles}>
                <h3 className={s.name}>{name}</h3>
                <span className={s.number}>{percentage}</span>
            </div>
            <div className={s.bar}>
                <span
                    className={s.percentage}
                    style={{ width: `${percentage}` }}
                ></span>
            </div>
        </div>
    )
}
