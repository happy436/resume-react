import React, { useState } from "react"
import s from "../Qualification.module.scss"
import { Tab } from "./tab/Tab"
import { History } from "./history/History"
import PropTypes from "prop-types"

export const Container = ({ data }) => {
    const [state, setState] = useState("")
    let content

    function Active(el) {
        setState(el.target.dataset.target)
        const tabs = Array.from(document.getElementsByClassName(s.button))

        Array.from(tabs).forEach(tab => {
            tabs.forEach(tab => {
                tab.classList.remove(s.active)
            })
        })
        const target = el.target
        target.classList.add(s.active)
    }

    const TabElement = data.map(item => {
        return (
            <Tab
                Active={Active}
                name={item.name}
                icon={item.icon}
                key={item.name}
                dataTarget={item.dataTarget}
            />
        )
    })

    if (state === "work") {
        content = <History data={data[1].data} />
    } else if (state === "education") {
        content = <History data={data[0].data} />
    }

    return (
        <>
            <div className={s.tabs}>{TabElement}</div>
            <div className={s.sections}>{content}</div>
        </>
    )
}

Container.propTypes = {
    data: PropTypes.array
}
