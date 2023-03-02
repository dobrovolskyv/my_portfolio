import React from 'react'
import { Link } from 'react-router-dom'
import s from './Menu.module.scss'
import {HiOutlineX} from 'react-icons/hi'

function Menu({active, setActive}) {
  return (
    <div className={active? `${s.menu}, ${s.active}` : `${s.menu}`} onClick={()=>setActive(false)}>
    <div className={s.menu_wrapper}>
        <HiOutlineX className={s.burger_img} onClick={()=>setActive(false)}/>
    <ul className={s.menu_list}>
        <li className={s.menu_item}>
            <Link to='/'><p>home</p></Link>
        </li>
        <li className={s.menu_item}>
        <Link to='/devices'><p>what I use</p></Link>
        </li>
    </ul>
    </div>
    </div>
  )
}

export default Menu



