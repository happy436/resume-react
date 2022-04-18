import React, { useEffect, useContext } from "react"
import { UilMoon, UilSun } from "@iconscout/react-unicons"
import s from "../../Header.module.scss"
import { themeChangeActionCreator } from "../../../../redux/themeReducer"
import Context from "../../../../context"

export const ChangeTheme = props => {
    const { theme, dispatch } = useContext(Context)

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark").matches) {
            document.body.classList.toggle("dark-theme")
        } else if (window.matchMedia("(prefers-color-scheme: light").matches) {
            document.body.classList.toggle("dark-theme")
            if (theme === 0) {
                changeTheme()
            }
        }
    }, [])

    function changeTheme() {
        document.body.classList.toggle("dark-theme")
        return dispatch(themeChangeActionCreator())
    }

    function changeBtn() {
        if (theme === 0) {
            return <UilSun className={s.change_theme} onClick={changeTheme} />
        } else {
            return <UilMoon className={s.change_theme} onClick={changeTheme} />
        }
    }

    return <>{changeBtn()}</>
}
