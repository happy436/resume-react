import React from 'react'
import s from "../../Skills.module.scss"
import v from "../../../../styles/shared.module.scss"
import { UilAngleDown, } from '@iconscout/react-unicons'
import { Skill } from "./skill/Skill"

export const Category = (props) => {
    const { category_icon, category_name, category_subtitle, skills } = props

    const Skills = skills.map((item) => {
        return (
            <Skill name={item.name} percentage={item.percentage} key={item.name}/>
        )
    })

    const skills__content = React.createRef()

    function Active(){
        skills__content.current.classList.toggle(`${s.active}`)
    }

    return (
        
            <div>
                <div className={s.skills__content} onClick={Active} ref={skills__content}>
                    <div className={s.skills__header} >
                        {category_icon}
                        <div>
                            <h1 className={s.skills__title}>{category_name}</h1>
                            <span className={s.skills__subtitle}>{category_subtitle}</span>
                        </div>
                        <UilAngleDown className={s.skills__arrow} />
                    </div>
                    <div className={`${s.skills__list} ${v.grid}`} >
                        {Skills}
                    </div>
                </div>
            </div>
        
    )
}
