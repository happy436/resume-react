import React from 'react'
import s from "./Skills.module.scss"
import v from "../../styles/shared.module.scss"
import { UilBracketsCurly, UilServerNetwork, UilCube } from '@iconscout/react-unicons'
import { Category } from './components/category/Category'

const tech_skills_ENG = [
    {
        icon: <UilBracketsCurly className={s.icon} />,
        name: "Front end developer",
        subtitle: "More than 1 years",
        skills:
            [
                { name: "HTML", percentage: "60%" },
                { name: "CSS", percentage: "60%" },
                { name: "SCSS", percentage: "50%" },
                { name: "JavaScript", percentage: "40%" },
                { name: "React", percentage: "30%" },
            ],
    },
    /* {
        icon: <UilServerNetwork className={s.icon} />,
        name: "Back end developer",
        subtitle: "0.5 year",
        skills:
            [
                { name: "Node Js", percentage: "10%" },
            ],
    }, */
    {
        icon: <UilCube  className={s.icon} />,
        name: "3D modeling (for enginner)",
        subtitle: "More than 4 year",
        skills:
            [
                { name: "Inventor", percentage: "80%" },
                { name: "Solidworks", percentage: "60%" },
                { name: "KOMPAS-3D", percentage: "50%" },
                { name: "AutoCAD", percentage: "30%" },
            ],
    },
]

const tech_skills_RU = [
    {
        icon: <UilBracketsCurly className={s.icon} />,
        name: "Front end разработчик",
        subtitle: "Более 1 года>",
        skills:
            [
                { name: "HTML", percentage: "60%" },
                { name: "CSS", percentage: "60%" },
                { name: "SCSS", percentage: "50%" },
                { name: "JavaScript", percentage: "40%" },
                { name: "React", percentage: "30%" },
            ],
    },
    /* {
        icon: <UilServerNetwork className={s.icon} />,
        name: "Back end разработчик",
        subtitle: "Пол года",
        skills:
            [
                { name: "Node Js", percentage: "10%" },
            ],
    }, */
    {
        icon: <UilCube  className={s.icon} />,
        name: "3D моделировани (для инженеров)",
        subtitle: "Более 4 лет",
        skills:
            [
                { name: "Inventor", percentage: "80%" },
                { name: "Solidworks", percentage: "60%" },
                { name: "KOMPAS-3D", percentage: "50%" },
                { name: "AutoCAD", percentage: "30%" },
            ],
    },
]

export const Skills = (props) => {
    const Categories = Language().map((category) => {
        return (
            <Category
                category_icon={category.icon}
                category_name={category.name}
                category_subtitle={category.subtitle}
                skills={category.skills}
            />
        )
    })

    function Language(){
        if(props.language === 1){
            return tech_skills_ENG
        } else {
            return tech_skills_RU
        }
    }

    return (
        <section className={`${s.skills} ${v.section}`}>
            <h2 className={v.section__title}>{props.language === 1 ? "Skills" : "Навыки"}</h2>
            <span className={v.section__subtitle}>{props.language === 1 ? "My technical level" : "Мой технический уровень"}</span>
            <div className={`${s.container} ${v.container} ${v.grid}`}>
                {Categories}
            </div>
        </section>
    )
}
