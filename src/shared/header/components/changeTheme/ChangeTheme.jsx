import React, { useEffect } from 'react'
import { UilMoon, UilSun } from '@iconscout/react-unicons'
import s from "../../Header.module.scss"
import { themeChangeActionCreator } from '../../../../redux/themeReducer'

export const ChangeTheme = (props) => {

    const {theme, dispatch} = props

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark').matches){
            document.getElementsByTagName('body')[0].classList.add("dark-theme")
        } else if(window.matchMedia('(prefers-color-scheme: light').matches){
            document.getElementsByTagName('body')[0].classList.remove("dark-theme")
            if(theme === 0){
                changeTheme()
            }
        }
    },[])

    function changeTheme(){
        return dispatch(themeChangeActionCreator())
    }

    function changeBtn(){
        if(theme === 0){
            document.getElementsByTagName('body')[0].classList.add("dark-theme")
            return <UilSun className={s.change_theme} onClick={changeTheme}/>
        } else if(theme === 1){
            document.getElementsByTagName('body')[0].classList.remove("dark-theme")
            return <UilMoon className={s.change_theme} onClick={changeTheme}/>
        }
    }

    return (
        <>
            {changeBtn()}
        </>
    )
}
