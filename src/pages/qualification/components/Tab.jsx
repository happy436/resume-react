import React from 'react'
import s from "../Qualification.module.scss"
import v from "../../../styles/shared.module.scss"

export const Tab = (props) => {

    return (
        <div className={`${s.qualification__button} ${v.button__flex}`} onClick={props.Active} data-target={props.data_target}>
            {props.icon}
            {props.name}
        </div>
    )
}
