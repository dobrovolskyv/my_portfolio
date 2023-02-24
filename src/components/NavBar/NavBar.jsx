import React from 'react'
import { HiOutlineMenuAlt1, HiOutlineSun, HiMoon } from "react-icons/hi"
import { GiBeard } from 'react-icons/gi'
import s from "./NavBar.module.css"
import { CiCoffeeCup } from 'react-icons/ci';

function NavBar() {


    return (
        <div className={s.container}>
            <div>
                <GiBeard />
                <p>dob dev</p>
            </div>
            <div className={s.time_wrapper}>
        <CiCoffeeCup className={s.time_icon} />
        <p className={s.time_text}>I'm currently drink coffee</p>
      </div>
            <div>
                <div className={s.color__scheme}>
                    <HiOutlineSun />
                    <HiMoon />
                </div>
                <HiOutlineMenuAlt1 />
            </div>

            {/* <ul className={s.list}>
            <li className={s.item}>
                <Link to="/"><p>HOME</p></Link>
            </li>
            <li className={s.item}>
            <Link to='/experience'><p>EXPERIENCE</p></Link>
      
            </li>
            <li className={s.item}>
                <p>WORK</p>
            </li>
            <li className={s.item}>
                <p>CONTACT</p>
            </li>
        </ul> */}
        </div>
    )
}

export default NavBar