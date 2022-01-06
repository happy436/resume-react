import React from 'react'
import { UilMoon, UilSun } from '@iconscout/react-unicons'
import s from "../../Header.module.scss"

export const ChangeTheme = () => {

    function changeTheme(){
        
    }

    function changeBtn(){
        if(localStorage.getItem('theme') === 'dark-theme'){
            return <UilSun className={s.change_theme} onClick={changeTheme}/>
        } else{
            return <UilMoon className={s.change_theme} onClick={changeTheme}/>
        }
    }

    return (
        <>
            {changeBtn()}
        </>
    )
}
