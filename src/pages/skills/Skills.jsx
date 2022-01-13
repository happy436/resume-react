import React from 'react'
import s from "./Skills.module.scss"
import v from "../../styles/shared.module.scss"
import { UilBracketsCurly, UilServerNetwork, UilCube } from '@iconscout/react-unicons'
import { Category } from './components/category/Category'

const tech_skills = [
    {
        icon: <UilBracketsCurly className={s.skills__icon} />,
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
    {
        icon: <UilServerNetwork className={s.skills__icon} />,
        name: "Back end developer",
        subtitle: "0.5 year",
        skills:
            [
                { name: "Node Js", percentage: "10%" },
            ],
    },
    {
        icon: <UilCube  className={s.skills__icon} />,
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

const Categories = tech_skills.map((category) => {
    return (
        <Category
            category_icon={category.icon}
            category_name={category.name}
            category_subtitle={category.subtitle}
            skills={category.skills}
        />
    )
})

export const Skills = () => {
    return (
        <section className={`${s.skills} ${v.section}`}>
            <h2 className={v.section__title}>Навыки</h2>
            <span className={v.section__subtitle}>My technical level</span>
            <div className={`${s.skills__container} ${v.container} ${v.grid}`}>
                {Categories}
            </div>
        </section>
    )
}
