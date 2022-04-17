import React, { useContext } from "react"
import s from "../../About.module.scss"
import v from "../../../../styles/shared.module.scss"
import { UilDownloadAlt } from "@iconscout/react-unicons"
import resumeRU from "../../../../assets/pdf/indexRU.pdf"
import resumeENG from "../../../../assets/pdf/indexENG.pdf"
import Context from "../../../../context"

export const PDFButton = props => {
    const { language } = useContext(Context)
    return (
        <div className={s.buttons}>
            <a
                className={`${v.button} ${v.button__flex}`}
                href={language === 1 ? resumeENG : resumeRU}
                download
                rel="noopener"
            >
                {language === 1 ? "Download CV" : "Скачать резюме"}
                <UilDownloadAlt className={v.button__icon} />
            </a>
        </div>
    )
}
