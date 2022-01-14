import React, { useState } from 'react'
import { UilCalendarAlt } from '@iconscout/react-unicons'
import s from "../../Qualification.module.scss"
import { Tab } from './Tab'

export const Tabs = (props) => {
    const data = props.data
    const [state, setState] = useState()
    window.state = state

    function Active(el) {
        setState(el.target.dataset.target)
        let tabs = Array.from(document.getElementsByClassName(s.button))

        Array.from(tabs).forEach((tab) => {
            tabs.forEach(tab =>{
                tab.classList.remove(s.active)
            })
        })
        const target = el.target
        target.classList.add(s.active)
    }

    let content

    const TabElement = data.map((item) => {
        return (<Tab
            Active={Active}
            name={item.name}
            icon={item.icon}
            key={item.name} data_target={item.data_target}
        />)})

    if (state === 'work') {
        content =
            <div className={`${s.content} ${s.active}`} data-content id="work">
                {/* <!--==================== QUALIFICATION 1 ====================--> */}
                <div className="data">
                    <div className="item">
                        <h3 className="title">Stretching, gym</h3>
                        <span className="subtitle">Sports people</span>

                        <div className="calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2017 - 2020
                        </div>
                    </div>
                    <div>
                        <span className="rounder"></span>
                        <span className="line"></span>
                    </div>
                    <div></div>
                </div>
                {/* <!--==================== QUALIFICATION 2 ====================--> */}
                <div className="data">
                    <div></div>
                    <div>
                        <span className="rounder"></span>
                        <span className="line"></span>
                    </div>
                    <div>
                        <h3 className="title">Stretching</h3>
                        <span className="subtitle">Step by Step</span>

                        <div className="calendar">
                            <i className="uil uil-calendar-alt"></i>
                            6 месяцев 2018
                        </div>
                    </div>
                </div>
                {/* <!--==================== QUALIFICATION 3 ====================--> */}
                <div className="data">
                    <div className="item">
                        <h3 className="title">Stretching</h3>
                        <span className="subtitle">Tvoy Format</span>

                        <div className="calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2018 - 2019
                        </div>
                    </div>
                    <div>
                        <span className="rounder"></span>
                        <span className="line"></span>
                    </div>
                    <div></div>
                </div>
                {/* <!--==================== QUALIFICATION 4 ====================--> */}
                <div className="data">
                    <div></div>
                    <div>
                        <span className="rounder"></span>
                    </div>
                    <div>
                        <h3 className="title">Stretching, <br />Power stretching, <br />Body shape, <br />Fly yoga, <br />90-60-90, gym</h3>
                        <span className="subtitle">Fit 4 You</span>

                        <div className="calendar">
                            <i className="uil uil-calendar-alt"></i>
                            2019 - настоящее время
                        </div>
                    </div>
                </div>
            </div>     
    } else if (state === 'education') {
        content = 
            <div className={`${s.content} ${s.active}`} data-content id="education">
                {/* <!--==================== QUALIFICATION 1 ====================--> */}
                <div className={s.data}>
                    <div>
                        <h3 className={s.title}>Инструктор направления Stretching</h3>
                        <span className={s.subtitle}>студия "Step by Step"</span>
                        <div className={s.calendar}>
                            <UilCalendarAlt />
                            30.03.2018
                        </div>
                    </div>
                    <div>
                        <span className={s.rounder}></span>
                        <span className={s.line}></span>
                    </div>
                    <div></div>
                </div>
                {/* <!--==================== QUALIFICATION 2 ====================--> */}
                <div className={s.data}>
                    <div></div>
                    <div>
                        <span className={s.rounder}></span>
                        <span className={s.line}></span>
                    </div>
                    <div>
                        <h3 className={s.title}>Семинар <br />"Stretching"</h3>
                        <span className={s.subtitle}>Академией фитнеса и танцев "Master"</span>
                        <div className={s.calendar}>
                            <UilCalendarAlt />
                            03.11.2018
                        </div>
                    </div>
                </div>
            </div>
    }


    return (
        <>
            <div className={s.tabs}>
                {TabElement}
            </div>
            <div className={s.sections}>
                {content}
            </div>
        </>
    )
}
