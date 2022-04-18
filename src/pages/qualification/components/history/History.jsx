import React from "react"
import s from "../../Qualification.module.scss"
import { Item } from "./Item"
import PropTypes from "prop-types"

export const History = data => {
    const historyElements = data.map((item, index) => {
        return (
            <Item
                key={index}
                index={index}
                arrLength={data.length - 1}
                title={item.title}
                subtitle={item.subtitle}
                calendar={item.calendar}
            />
        )
    })

    return <div className={`${s.content}`}>{historyElements}</div>
}

History.propTypes = {
    data: PropTypes.array
}
