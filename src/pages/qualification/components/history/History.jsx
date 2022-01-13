import React from 'react'
import { UilCalendarAlt } from '@iconscout/react-unicons'
import s from "../../Qualification.module.scss"
import { Item } from './Item'

export const History = (props) => {

    const data = props.data

    let historyElements = data.map((item,index) => {
        return(
            <Item 
                key={index}
                index={index}
                arr_length={data.length-1}
                title={item.title}
                subtitle={item.subtitle}
                calendar={item.calendar}
            />
        )
    })

    return (
        <div className={`${s.qualification__content}`}>
            {historyElements}
        </div>
    )
}