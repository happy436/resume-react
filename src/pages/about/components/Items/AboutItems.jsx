import React, { useContext } from "react"
import Context from "../../../../context"
import s from "./AboutItems.module.scss"
import { AboutItem } from "./item/AboutItem"

export const AboutItems = props => {
    const { language } = useContext(Context)
    return (
        <div className={s.info_items}>
            <AboutItem
                count={1}
                name={language === 1 ? "Years experience" : "Опыт работы"}
            />
            <AboutItem
                count={10}
                name={
                    language === 1 ? "Complete project" : "Законченных проектов"
                }
            />
            <AboutItem
                count={1}
                name={
                    language === 1 ? "Companies worked" : "Работал в компаниях"
                }
            />
        </div>
    )
}
