import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import s from './Devices.module.scss'


function Devices() {
  return (
    <div className={s.devices}>
        <h1>My devices</h1>
        <p>A curated list of the tech I use</p>
        <p>As an indie developer, I've been spending hours and hours at my desk every day. So, I've been continuously improving my workspace in order to boost my productivity. Whenever I upload new content, people ask me what tools I use. So, here is a living snapshot and a place to point curious developers to when I get asked. Most of the links are amazon affiliate links, so I'll get filthy rich if you click them and buy something. Learn more about me</p>
       <Link to='/devices/macbook'>macbook</Link>
       <Link to='/devices/monitor'>monitor</Link>
       
    </div>
  )
}

export default Devices