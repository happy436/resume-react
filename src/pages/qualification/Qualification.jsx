import React from 'react'

export const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Квалификация</h2>
            <span className="section__subtitle">Моя карьера</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex qualification__active" data-target="#education">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Учеба
                    </div>

                    <div className="qualification__button button--flex" data-target="#work">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Работа
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
                    <div className="qualification__content qualification__active" data-content id="education">
                        {/* <!--==================== QUALIFICATION 1 ====================--> */}
                        <div className="qualification__data">
                            <div className="qualification__item">
                                <h3 className="qualification__title">Инструктор <br />направления Stretching</h3>
                                <span className="qualification__subtitle">студия "Step by Step"</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    30.03.2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>

                        {/* <!--==================== QUALIFICATION 2 ====================--> */}
                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Семинар <br />"Stretching"</h3>
                                <span className="qualification__subtitle">Академией фитнеса и танцев "Master"</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    3.11.2018
                                </div>
                            </div>


                        </div>

                        {/* <!--==================== QUALIFICATION 3 ====================--> */}
                        <div className="qualification__data">

                            <div className="qualification__item">
                                <h3 className="qualification__title">Семинар <br />Анатомия и физиология</h3>
                                <span className="qualification__subtitle">Академией фитнеса и танцев "Master"</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    19.01.2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>
                        {/* <!--==================== QUALIFICATION 4 ====================--> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Workshop <br />"Power stretching"</h3>
                                <span className="qualification__subtitle">Академией фитнеса и танцев "Master"</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    13.03.2019
                                </div>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 5 ====================--> */}
                        <div className="qualification__data">

                            <div className="qualification__item">
                                <h3 className="qualification__title">Workshop <br />"Stretching-duet"</h3>
                                <span className="qualification__subtitle">Академией фитнеса и танцев "Master"</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    13.03.2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>
                        {/* <!--==================== QUALIFICATION 6 ====================--> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Функц-ные тренировки</h3>
                                <span className="qualification__subtitle">Лига профессионалов Фитнеса Украины</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    14.04.2019
                                </div>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 7 ====================--> */}
                        <div className="qualification__data">

                            <div className="qualification__item">
                                <h3 className="qualification__title">Инструктор <br />Fly stretching</h3>
                                <span className="qualification__subtitle">Спортивная студия "Beauty Art Fit"</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    11.05.2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>
                        {/* <!--==================== QUALIFICATION 8 ====================--> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Инструктор <br />тренажерного зала</h3>
                                <span className="qualification__subtitle">Лига профессионалов Фитнеса Украины</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    10.10.2019
                                </div>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 9 ====================--> */}
                        <div className="qualification__data">

                            <div className="qualification__item">
                                <h3 className="qualification__title">Семинар <br />"Функц-ные тренировки"</h3>
                                <span className="qualification__subtitle">Лига профессионалов Фитнеса Украины</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    20.10.2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>
                        {/* <!--==================== QUALIFICATION 10 ====================--> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Инструктор <br />групповых направлений</h3>
                                <span className="qualification__subtitle">Лига профессионалов Фитнеса Украины</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    27.10.2019
                                </div>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 11 ====================--> */}
                        <div className="qualification__data">

                            <div className="qualification__item">
                                <h3 className="qualification__title">Основы нутрициологии</h3>
                                <span className="qualification__subtitle">Лига профессионалов Фитнеса Украины</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    24.06.2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>
                        {/* <!--==================== QUALIFICATION 12 ====================--> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Инструктор <br />Yoga (Fly yoga)</h3>
                                <span className="qualification__subtitle">Обучающий центр  My yoga school</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    ‌02.04.2020
                                </div>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 13 ====================--> */}
                        <div className="qualification__data">

                            <div className="qualification__item">
                                <h3 className="qualification__title">Семинар <br />"Fly Dance"</h3>
                                <span className="qualification__subtitle">Спортивная <br />студия "Beauty Art Fit"</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    ‌13.02.2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>

                            </div>
                            <div></div>
                        </div>

                    </div>
                    {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
                    <div className="qualification__content" data-content id="work">
                        {/* <!--==================== QUALIFICATION 1 ====================--> */}
                        <div className="qualification__data">

                            <div className="qualification__item">
                                <h3 className="qualification__title">Stretching, gym</h3>
                                <span className="qualification__subtitle">Sports people</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div></div>

                        </div>

                        {/* <!--==================== QUALIFICATION 2 ====================--> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Stretching</h3>
                                <span className="qualification__subtitle">Step by Step</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    6 месяцев 2018
                                </div>
                            </div>
                        </div>

                        {/* <!--==================== QUALIFICATION 3 ====================--> */}
                        <div className="qualification__data">

                            <div className="qualification__item">
                                <h3 className="qualification__title">Stretching</h3>
                                <span className="qualification__subtitle">Tvoy Format</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>


                        </div>

                        {/* <!--==================== QUALIFICATION 4 ====================--> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>

                            </div>

                            <div>
                                <h3 className="qualification__title">Stretching, <br />Power stretching, <br />Body shape, <br />Fly yoga, <br />90-60-90, gym</h3>
                                <span className="qualification__subtitle">Fit 4 You</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - настоящее время
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
