import React, { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Link } from "react-router-dom"

import { HiOutlineMenuAlt1, HiOutlineSun, HiMoon } from "react-icons/hi"

import s from "./NavBar.module.scss"
import { CiCoffeeCup } from 'react-icons/ci';
import Time from '../Time/Time';
import Menu from '../Menu/Menu'





function NavBar() {

    const theme = useTheme()
    const [menuActive, setMenuActive] = useState(false);


    function changeTheme() {
        theme.changeTheme(theme.theme === 'dark' ? 'light' : 'dark')


    }



    return (
        <div className={s.navbar_wrapper} >
            <Link className={s.logo} to='/'>
                <svg className={s.logo_img} width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M13.4758 7.29325C11.8567 9.29462 9.18382 10.2543 6.63666 9.9415C3.7572 9.58825 1.14357 7.63525 0.239739 4.0375C0.187746 3.83045 0.199838 3.61393 0.274615 3.41302C0.349392 3.21212 0.483791 3.03505 0.662236 2.90235C0.840681 2.76965 1.05586 2.68675 1.28284 2.66326C1.50983 2.63977 1.73931 2.67665 1.9447 2.76962C4.47374 3.91262 6.81911 2.69763 8.77661 1.24525C9.65628 0.59275 10.6314 0.274375 11.6029 0.38125C12.3521 0.463375 12.9877 0.787375 13.4758 1.23738C13.9652 0.787375 14.5996 0.463375 15.3499 0.38125C16.3214 0.274375 17.2966 0.59275 18.1774 1.24525C20.1337 2.69763 22.4791 3.91262 25.0082 2.76962C25.2135 2.67697 25.4428 2.64034 25.6696 2.66398C25.8964 2.68762 26.1113 2.77056 26.2896 2.90321C26.4678 3.03586 26.6021 3.21279 26.6768 3.41352C26.7516 3.61426 26.7637 3.8306 26.7119 4.0375C25.8093 7.63525 23.1957 9.58825 20.3162 9.9415C17.769 10.2543 15.0962 9.29462 13.477 7.29325H13.4758Z"  />
                </svg>


                {/* <GiBeard className={s.logo_img} /> */}
                <p className={s.logo_text}>dob dev</p>

            </Link>
            <div className={s.time_wrapper}>
                <CiCoffeeCup className={s.time_icon} />

                <Time />
                <p className={s.time_text} >I'm currently drink coffee </p>
            </div>

            <div className={s.color_scheme}>
                {theme.theme === 'dark' ? <HiOutlineSun className={s.color_scheme_img} onClick={changeTheme} /> : <HiMoon className={s.color_scheme_img} onClick={changeTheme} />}
                {/* {theme.theme === 'light' ? <HiOutlineSun className={s.color_scheme_img} onClick={changeTheme} /> : <HiMoon className={s.color_scheme_img} onClick={changeTheme} />} */}


            </div>

            <HiOutlineMenuAlt1 className={s.burger_img} onClick={() => setMenuActive(true)} />
            <Menu active={menuActive} setActive={setMenuActive} onClick={() => setMenuActive(false)} />
        </div>
    )
}

export default NavBar