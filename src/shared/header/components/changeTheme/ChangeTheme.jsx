import React from 'react'
import { UilMoon, UilSun } from '@iconscout/react-unicons'
import s from "../../Header.module.scss"
import { themeChangeActionCreator } from '../../../../redux/themeReducer'

export const ChangeTheme = (props) => {

    const {theme, dispatch} = props

    function changeTheme(){
        return dispatch(themeChangeActionCreator())
    }

    function changeBtn(){
        if(theme === 1){
            document.getElementsByTagName('body')[0].classList.add("dark-theme")
            return <UilSun className={s.change_theme} onClick={changeTheme}/>
        } else{
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
