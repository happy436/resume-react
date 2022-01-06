import React from 'react'

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Навыки</h2>
            <span className="section__subtitle"></span>
            <div className="skills__container container grid">
                {/* SKILLS 1 */}
                <div className="skills__content skills__close">
                    <div className="skills__header">
                        <i className="uil uil-arrow-resize-diagonal skills__icon"></i>
                        <div>
                            <h1 className="skills__title">Stretching</h1>
                            <span className="skills__subtitle">04+ года</span>
                        </div>
                    </div>

                </div>
                {/* SKILLS 2 */}
                <div className="skills__content skills__close">
                    <div className="skills__header">
                        <i className="uil uil-dribbble skills__icon"></i>
                        <div>
                            <h1 className="skills__title">Fitness</h1>
                            <span className="skills__subtitle">03+ года</span>
                        </div>
                    </div>
                </div>
                {/* SKILLS 3 */}
                <div className="skills__content skills__close">
                    <div className="skills__header">
                        <i className="uil uil-plane-fly skills__icon"></i>
                        <div>
                            <h1 className="skills__title">Fly yoga</h1>
                            <span className="skills__subtitle">03+ года</span>
                        </div>
                    </div>
                </div>
                {/* SKILLS 4 */}
                <div className="skills__content skills__close">
                    <div className="skills__header">
                        <i className="uil uil-dumbbell skills__icon"></i>
                        <div>
                            <h1 className="skills__title">Gym</h1>
                            <span className="skills__subtitle">02+ года</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
