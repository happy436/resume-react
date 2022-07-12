import React from "react"
import { Item } from "./Item"
import PropTypes from "prop-types"

export const History = ({ data }) => {
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

    return <ul>{historyElements}</ul>
}

History.propTypes = {
    data: PropTypes.array
}
