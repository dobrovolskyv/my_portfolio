import React, { useState, useEffect } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Link } from "react-router-dom"

import { HiOutlineMenuAlt1, HiOutlineSun, HiMoon } from "react-icons/hi"
import { GiBeard } from 'react-icons/gi'
import s from "./NavBar.module.scss"
import { CiCoffeeCup } from 'react-icons/ci';
import Time from '../Time/Time';
import Menu from '../Menu/Menu'
import logo from '../../img/logo1.svg'




function NavBar() {

    const theme = useTheme()
    const [menuActive, setMenuActive] = useState(false);


    function changeTheme(){
        theme.changeTheme(theme.theme === 'dark' ? 'light' : 'dark')

       
    }



    return (
        <div className={s.navBar_wrapper} >
            <Link className={s.logo} to='/'>
               
                <img src={logo} alt="" className={s.logo_img}/>
                {/* <GiBeard className={s.logo_img} /> */}
                <p className={s.logo_text}>dob dev</p>
                
            </Link>
            <div className={s.time_wrapper}>
                <CiCoffeeCup className={s.time_icon} />

                <Time />
                <p className={s.time_text} >I'm currently drink coffee </p>
            </div>

            <div className={s.color_scheme}>
                { theme=== 'dark' ? <HiOutlineSun className={s.color_scheme_img} onClick={changeTheme}/> :  <HiMoon className={s.color_scheme_img} onClick={changeTheme}/>}
                
               
            </div>

            <HiOutlineMenuAlt1 className={s.burger_img} onClick={()=>setMenuActive(true)}/>
            <Menu active={menuActive} setActive={setMenuActive} onClick={()=>setMenuActive(false)}/>
        </div>
    )
}

export default NavBar