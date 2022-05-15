import React from "react"
import { UilCheckCircle } from "@iconscout/react-unicons"
import s from "./Services.module.scss"
import PropTypes from "prop-types"

export const Item = ({ service }) => {
    return (
        <li className={s.modal_service}>
            <UilCheckCircle className={s.modal_icon} />
            <p>{service}</p>
        </li>
    )
}

Item.propTypes = {
    service: PropTypes.string
}
