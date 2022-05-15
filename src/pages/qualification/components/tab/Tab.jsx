import React from "react"
import s from "../../Qualification.module.scss"
import v from "../../../../styles/shared.module.scss"
import PropTypes from "prop-types"

export const Tab = ({ Active, dataTarget, icon, name }) => {
    return (
        <div
            className={`${s.button} ${v.button__flex}`}
            onClick={Active}
            data-target={dataTarget}
        >
            {icon}
            {name}
        </div>
    )
}

Tab.propTypes = {
    Active: PropTypes.func,
    dataTarget: PropTypes.string,
    icon: PropTypes.any,
    name: PropTypes.string
}
