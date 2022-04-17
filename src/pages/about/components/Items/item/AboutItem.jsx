import React from "react"
import s from "./AboutItem.module.scss"
import CountUp from "react-countup"
import PropTypes from "prop-types"

export const AboutItem = props => {
    const { count, name } = props

    function ten() {
        if (count >= 10) {
            return (
                <span className={`${s.info_title} ${s.count}`}>
                    {
                        <CountUp
                            className="account-balance"
                            start={0}
                            end={count}
                            duration={5}
                            useEasing={true}
                            useGrouping={true}
                        />
                    }
                </span>
            )
        } else {
            return (
                <>
                    <span className={s.info_title}>0</span>
                    <span className={`${s.info_title} ${s.count}`}>
                        {
                            <CountUp
                                className="account-balance"
                                start={0}
                                end={count}
                                duration={5}
                                useEasing={true}
                                useGrouping={true}
                            />
                        }
                    </span>
                </>
            )
        }
    }

    return (
        <div className={s.info_item}>
            <div className={s.info_wrapper}>
                {ten()}
                <span className={s.info_title}>+</span>
            </div>
            <span className={s.info_name}>{name}</span>
        </div>
    )
}

AboutItem.propTypes = {
    count: PropTypes.number,
    name: PropTypes.string
}
