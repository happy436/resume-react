import React from 'react'
import s from "../../../Skills.module.scss"
import v from "../../../../../styles/shared.module.scss"

export const Skill = (props) => {
    const { name, percentage } = props

    return (
        <div className={s.skills__data}>
            <div className={s.skills__titles}>
                <h3 className={s.skills__name}>{name}</h3>
                <span className={s.skills__number}>{percentage}</span>
            </div>
            <div className={s.skills__bar}>
                <span className={s.skills__percentage} style={{ width: `${percentage}` }}></span>
            </div>
        </div>
    )
}
