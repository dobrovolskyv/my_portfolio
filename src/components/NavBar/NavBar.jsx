import React from 'react'
import { HiOutlineMenuAlt1, HiOutlineSun, HiMoon } from "react-icons/hi"
import { GiBeard } from 'react-icons/gi'
import s from "./NavBar.module.scss"
import { CiCoffeeCup } from 'react-icons/ci';

function NavBar() {


    return (
        <div className={s.navBar_wrapper}>
            <div className={s.logo}>
                <GiBeard className={s.logo_img}/>
                <p className={s.logo_text}>dob dev</p>
            </div>
            <div className={s.time_wrapper}>
        <CiCoffeeCup className={s.time_icon} />
        <p className={s.time_text}>I'm currently drink coffee</p>
      </div>
            <div >
                <div className={s.color_scheme}>
                    <HiOutlineSun className={s.color_scheme_img}/>
                    {/* <HiMoon className={s.color_scheme_img}/> */}
                </div>
                <HiOutlineMenuAlt1  className={s.burger}/>
            </div>

        </div>
    )
}

export default NavBar