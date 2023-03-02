import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {BsLaptop,BsFillKeyboardFill} from 'react-icons/bs'
import {FiMonitor} from 'react-icons/fi'
import {SlEarphones} from 'react-icons/sl'
import s from './Devices.module.scss'


function Devices() {
  return (
    <div className={s.container}>
    <div className={s.devices}>
        <h2 className={s.devices_title}>My devices</h2>
        <p className={s.devices_subtitle}>A curated list of the tech I use</p>
        <p className={s.devices_subtitle}>As an Front-end developer, I've been spending hours and hours at my desk every day. So, I've been continuously improving my workspace in order to boost my productivity and some essential tools to help me get the work done.</p>
        <div className={s.devices_contentbox}>
          <ul className={s.devices_list}>
            <li className={s.devices_item}>
              <BsLaptop className={s.devices_img}/>
              <p className={s.devices_text}>Macbook Air 13 2020 M1 16gb</p>
            </li>
            <li className={s.devices_item}>
              <FiMonitor className={s.devices_img}/>
              <p className={s.devices_text}>LG 29” HDR10 IPS Full HD UltraWide</p>
            </li>
            <li className={s.devices_item}>
            <SlEarphones className={s.devices_img}/>
            <p className={s.devices_text}>AirPods Pro</p>
            </li>
            <li className={s.devices_item}>
              <BsFillKeyboardFill className={s.devices_img}/>
              <p className={s.devices_text}>MARVO KG972W GASKET MOUNT MECHANICAL KEYBOARD</p>
            </li>
            <li className={s.devices_item}></li>
            <li className={s.devices_item}></li>
          </ul>
        </div>
       {/* <Link to='/devices/macbook'>macbook</Link>
       <Link to='/devices/monitor'>monitor</Link> */}
       
    </div>
    </div>
  )
}

export default Devices