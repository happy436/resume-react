import React from 'react'
import { UilTimes, UilArrowRight} from '@iconscout/react-unicons'
import { Item } from './Item'
import s from "./Services.module.scss"
import v from "../../styles/shared.module.scss"

export const Service = (props) => {

    const {title, icon, services} = props

    const serviceElement = services.map(item => {
        return(<Item key={item.item} service={item.item}/>)
    })

    const modalRef = React.createRef()

    function ActiveModal(){
        modalRef.current.classList.toggle(s.active_modal)
    }

    return (
        <div className={s.content}>
            <div>
                {icon}
                <h3 className={s.title}>{title}</h3>
            </div>
            <span onClick={ActiveModal} className={`${v.button} ${v.button__flex} ${v.button__small} ${v.button__link} ${s.button}`}>
                Читать больше
                <UilArrowRight className={v.button__icon} />
            </span>
            <div className={s.modal} ref={modalRef}>
                <div className={s.modal_content}>
                    <h4 className={s.modal_title}>{title}</h4>
                    <UilTimes className={s.modal_close} onClick={ActiveModal}/>
                    <ul className={`${s.modal_services} ${v.grid}`}>
                        {serviceElement}
                    </ul>
                </div>
            </div>
        </div>
    )
}
