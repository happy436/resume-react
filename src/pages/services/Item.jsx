import React from 'react'
import { UilCheckCircle } from '@iconscout/react-unicons'
import s from "./Services.module.scss"

export const Item = (props) => {
    return (
        <li className={s.modal_service}>
            <UilCheckCircle className={s.modal_icon} />
            <p>{props.service}</p>
        </li>
    )
}
