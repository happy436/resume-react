import React, { useState } from "react"
import s from "../Qualification.module.scss"
import { Tab } from "./tab/Tab"
import { History } from "./history/History"
import PropTypes from "prop-types"

export const Container = ({ data }) => {
    const [active, setActive] = useState("education")

    function Active() {
        setActive(prev => prev === "education" ? "work" : "education")
    }

    const TabElement = data.map(item => {
        return (
            <Tab
                Active={Active}
                active={active}
                name={item.name}
                icon={item.icon}
                key={item.name}
                id={item.id}
            />
        )
    })

    return (
        <>
            <header className={s.tabs}>{TabElement}</header>
            <main className={s.sections}>
                {active === "education" ? (
                    <History data={data[0].data} />
                ) : (
                    <History data={data[1].data} />
                )}
            </main>
        </>
    )
}

Container.propTypes = {
    data: PropTypes.array
}
