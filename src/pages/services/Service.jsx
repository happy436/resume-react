import React, { useContext } from "react"
import { UilTimes, UilArrowRight } from "@iconscout/react-unicons"
import { Item } from "./Item"
import s from "./Services.module.scss"
import v from "../../styles/shared.module.scss"
import PropTypes from "prop-types"
import Context from "../../context"

export const Service = ({ title, icon, services }) => {
    const { language } = useContext(Context)

    const serviceElement = services.map(service => {
        return <Item key={service.item} service={service.item} />
    })

    const modalRef = React.createRef()

    function ActiveModal() {
        modalRef.current.classList.toggle(s.active_modal)
    }

    return (
        <div className={s.content}>
            <div>
                {icon}
                <h3 className={s.title}>{title}</h3>
            </div>
            <span
                onClick={ActiveModal}
                className={`${v.button__flex} ${v.button__small} ${v.button__link} ${s.button}`}
            >
                {language === 1 ? "Read more" : "Читать больше"}
                <UilArrowRight className={s.button__icon} />
            </span>
            <div className={s.modal} ref={modalRef}>
                <div className={s.modal_content}>
                    <h4 className={s.modal_title}>{title}</h4>
                    <UilTimes className={s.modal_close} onClick={ActiveModal} />
                    <ul className={`${s.modal_services} ${v.grid}`}>
                        { serviceElement }
                    </ul>
                </div>
            </div>
        </div>
    )
}

Service.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.any,
    services: PropTypes.array
}
