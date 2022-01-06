import React from 'react'

export const PDF_button = () => {
    return (
        <div className="about__buttons">
            <a download="" href="./pdf/Alexa-Cv.pdf" className="button button--flex">
                Download CV<i className="uil uil-download-alt button__icon"></i>
            </a>
        </div>
    )
}
