import React from "react"
import s from "../../Skills.module.scss"
import v from "../../../../styles/shared.module.scss"
import { UilAngleDown } from "@iconscout/react-unicons"
import { Skill } from "./skill/Skill"
import PropTypes from "prop-types"

export const Category = props => {
    const { categoryIcon, categoryName, categorySubtitle, skills } = props

    const Skills = skills.map(item => {
        return (
            <Skill
                name={item.name}
                percentage={item.percentage}
                key={item.name}
            />
        )
    })

    const content = React.createRef()

    function Active() {
        content.current.classList.toggle(`${s.active}`)
    }

    return (
        <div>
            <div className={s.content} onClick={Active} ref={content}>
                <div className={s.header}>
                    {categoryIcon}
                    <div>
                        <h1 className={s.title}>{categoryName}</h1>
                        <span className={s.subtitle}>{categorySubtitle}</span>
                    </div>
                    <UilAngleDown className={s.arrow} />
                </div>
                <div className={`${s.list} ${v.grid}`}>{Skills}</div>
            </div>
        </div>
    )
}

Category.propTypes = {
    categoryIcon: PropTypes.any,
    categoryName: PropTypes.string,
    categorySubtitle: PropTypes.string,
    skills: PropTypes.array
}
