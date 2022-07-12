import React from "react"
import s from "../../Qualification.module.scss"
import v from "../../../../styles/shared.module.scss"
import PropTypes from "prop-types"

export const Tab = ({ Active, id, icon, name, active }) => {
    return (
        <button
            className={`${active === id ? s.active : null} ${s.button} ${v.button__flex}`}
            onClick={Active}
        >
            {icon}
            {name}
        </button>
    )
}

Tab.propTypes = {
    active: PropTypes.bool,
    Active: PropTypes.func,
    id: PropTypes.string,
    icon: PropTypes.any,
    name: PropTypes.string
}
