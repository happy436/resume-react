import React from 'react'

export const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Обо мне</h2>
            <span className="section__subtitle"></span>
            <div className="about__container container grid">
                <img src="./img/about-light.jpg" alt="about" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        Тренер-универсал большим спектром навыков в спортивной сфере.
                        Работаю в групповых направлениях и в тренажерном зале.<br />
                        Мои основные направления:
                        <br />- Fitness
                        <br />- Stretching
                        <br />- Fly yoga / Fly stretching
                    </p>
                    <div className="about__info">
                        <div className="">
                            <div style="display: flex; justify-content: center;">
                                <span className="about__info-title ">0</span>
                                <span className="about__info-title count">5</span>
                                <span className="about__info-title ">+</span>
                            </div>

                            <span className="about__info-name">Опыт <br /> работы </span>
                        </div>
                        <div className="">
                            <div style="display: flex; justify-content: center;">
                                <span className="about__info-title ">0</span>
                                <span className="about__info-title count">4</span>
                                <span className="about__info-title ">+</span>
                            </div>
                            <span className="about__info-name">Работала <br /> в залах </span>
                        </div>
                        <div className="">
                            <div style="display: flex; justify-content: center;">
                                <span className="about__info-title count">700</span>
                                <span className="about__info-title ">+</span>
                            </div>
                            <span className="about__info-name">Каждый месяц <br /> тренирую человек </span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download="" href="./pdf/Alexa-Cv.pdf" className="button button--flex">
                            Download CV<i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
