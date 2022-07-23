import React, { useContext } from "react"
import s from "./Skills.module.scss"
import v from "../../styles/shared.module.scss"
import {
    UilBracketsCurly,
    UilCube,
    UilServerNetwork
} from "@iconscout/react-unicons"
import { Category } from "./components/category/Category"
import Context from "../../context"

const FrontEndSkills = [
    { name: "HTML", percentage: 60 },
    { name: "CSS", percentage: 60 },
    { name: "SCSS", percentage: 50 },
    { name: "JavaScript", percentage: 50 },
    { name: "React", percentage: 40 },
    { name: "Bootstrap", percentage: 40 },
    { name: "Tailwind", percentage: 45 },
    { name: "Redux / Redux-toolkit", percentage: 45 }
]

const BackEndSkills = [
    { name: "NodeJS", percentage: 10 },
    { name: "MongoDB", percentage: 10 },
    { name: "Express", percentage: 20 }
]

const EnginnerSkills = [
    { name: "Inventor", percentage: 80 },
    { name: "Solidworks", percentage: 80 },
    { name: "KOMPAS-3D", percentage: 60 },
    { name: "AutoCAD", percentage: 30 },
    { name: "Blender", percentage: 25 }
]

const techSkillsENG = [
    {
        icon: <UilBracketsCurly className={s.icon} />,
        name: "Front end developer",
        subtitle: "More than 1 years",
        skills: FrontEndSkills
    },
    {
        icon: <UilServerNetwork className={s.icon} />,
        name: "Back end developer",
        subtitle: "0.5 year",
        skills: BackEndSkills
    },
    {
        icon: <UilCube className={s.icon} />,
        name: "3D modeling (for enginner)",
        subtitle: "More than 4 year",
        skills: EnginnerSkills
    }
]

const techSkillsRU = [
    {
        icon: <UilBracketsCurly className={s.icon} />,
        name: "Front end разработчик",
        subtitle: "Более 1 года",
        skills: FrontEndSkills
    },
    {
        icon: <UilServerNetwork className={s.icon} />,
        name: "Back end разработчик",
        subtitle: "Пол года",
        skills: BackEndSkills
    },
    {
        icon: <UilCube className={s.icon} />,
        name: "3D моделировани (для инженеров)",
        subtitle: "Более 4 лет",
        skills: EnginnerSkills
    }
]

export const Skills = props => {
    const { language } = useContext(Context)
    const Categories = Language().map(category => {
        return (
            <Category
                key={category.name}
                categoryIcon={category.icon}
                categoryName={category.name}
                categorySubtitle={category.subtitle}
                skills={category.skills}
            />
        )
    })

    function Language() {
        if (language === 1) {
            return techSkillsENG
        } else {
            return techSkillsRU
        }
    }

    return (
        <section className={`${s.skills} ${v.section}`}>
            <h2 className={v.section__title}>
                {language === 1 ? "Skills" : "Навыки"}
            </h2>
            <span className={v.section__subtitle}>
                {language === 1
                    ? "My technical level"
                    : "Мой технический уровень"}
            </span>
            <div className={`${s.container} ${v.container} ${v.grid}`}>
                {Categories}
            </div>
        </section>
    )
}
