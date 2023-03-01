import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { HiOutlineMenuAlt1, HiOutlineSun, HiMoon } from "react-icons/hi"
import { GiBeard } from 'react-icons/gi'
import s from "./NavBar.module.scss"
import { CiCoffeeCup } from 'react-icons/ci';
import Time from '../Time/Time';
import Menu from '../Menu/Menu'



function NavBar() {
    const [menuActive, setMenuActive] = useState(false);


    return (
        <div className={s.navBar_wrapper} >
            <Link className={s.logo} to='/'>
                <GiBeard className={s.logo_img} />
                <p className={s.logo_text}>dob dev</p>
            </Link>
            <div className={s.time_wrapper}>
                <CiCoffeeCup className={s.time_icon} />

                <Time />
                <p className={s.time_text}>I'm currently drink coffee</p>
            </div>

            <div className={s.color_scheme}>
                <HiOutlineSun className={s.color_scheme_img} />
                {/* <HiMoon className={s.color_scheme_img}/> */}
            </div>

            <HiOutlineMenuAlt1 className={s.burger_img} onClick={()=>setMenuActive(true)}/>
            <Menu active={menuActive} setActive={setMenuActive} onClick={()=>setMenuActive(false)}/>
        </div>
    )
}

export default NavBar