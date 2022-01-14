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

    const content = React.createRef()

    function Active(){
        content.current.classList.toggle(`${s.active}`)
    }

    return (
        
            <div>
                <div className={s.content} onClick={Active} ref={content}>
                    <div className={s.header} >
                        {category_icon}
                        <div>
                            <h1 className={s.title}>{category_name}</h1>
                            <span className={s.subtitle}>{category_subtitle}</span>
                        </div>
                        <UilAngleDown className={s.arrow} />
                    </div>
                    <div className={`${s.list} ${v.grid}`} >
                        {Skills}
                    </div>
                </div>
            </div>
        
    )
}
