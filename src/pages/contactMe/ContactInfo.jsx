import React from "react"
import s from "./ContactMe.module.scss"
import PropTypes from "prop-types"

export const ContactInfo = props => {
    const { link, title, subtitle, icon } = props

    return (
        <div className={s.contact__information}>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={s.contact__information}
            >
                {icon}
                <div>
                    <h3 className={s.contact__title}>{title}</h3>
                    <span className={s.contact__subtitle}>{subtitle}</span>
                </div>
            </a>
        </div>
    )
}

ContactInfo.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    icon: PropTypes.any
}
