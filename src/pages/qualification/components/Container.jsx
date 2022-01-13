import React, { useState } from 'react'
import s from "../Qualification.module.scss"
import { Tab } from './Tab'
import { History } from './history/History'

export const Container = (props) => {
    const data = props.data
    const [state, setState] = useState()
    let content
    window.data = data

    function Active(el) {
        setState(el.target.dataset.target)
        let tabs = Array.from(document.getElementsByClassName(s.qualification__button))

        Array.from(tabs).forEach((tab) => {
            tabs.forEach(tab =>{
                tab.classList.remove(s.qualification__active)
            })
        })
        const target = el.target
        target.classList.add(s.qualification__active)
    }

    const TabElement = data.map((item) => {
        return (<Tab
            Active={Active}
            name={item.name}
            icon={item.icon}
            key={item.name} data_target={item.data_target}
        />)})

    if (state === 'work') {
        content = <History data={data[1].data}/>
    } else if (state === 'education') {
        content = <History data={data[0].data}/>
    }


    return (
        <>
            <div className={s.qualification__tabs}>
                {TabElement}
            </div>
            <div className={s.qualification__sections}>
                {content}
            </div>
        </>
    )
}
