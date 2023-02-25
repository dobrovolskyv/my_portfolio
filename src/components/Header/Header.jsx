import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import s from "./Header.module.scss"

import Contacts from '../Contacts/Contacts.jsx'
import ExperienceInfo from '../ExperienceInfo/ExperienceInfo';
import About from '../About/About';



function Header() {

  const [toggleState, setToggleState] = useState(1);

  function toggleTab(index) {
    setToggleState(index)
  }

  return (
    <div className={s.container}>

      <div className={s.info__present}>
        <p className={s.undertitle}>Hello, I'm</p>
        <h1 className={s.title}> Vlados Dobrovolskii</h1>
        <p className={s.subtitle}>I'm a Front-end developer who has unending enthusiasm for solving problems and learning new knowledge.</p>
      </div>
      <div className={s.tabs_wrapper}>
        <div className={s.tabs_head}>
          <div className={s.tabs_content}>
            <Link className={s.tabs_link} to='/works'>
              <div className={toggleState === 1 ? `${s.tab}` : `${s.tab_container}`} onClick={() => { toggleTab(1) }}>
                <p>
                  About.jsx
                </p>
              </div>
            </Link>
            <Link className={s.tabs_link} to='/'>
              <div className={toggleState === 2 ? `${s.tab}` : `${s.tab_container}`} onClick={() => { toggleTab(2) }}>
                <p>
                  Experience.jsx
                </p>
              </div>
            </Link>
            <Link className={s.tabs_link} to='/'>
              <div className={toggleState === 3 ? `${s.tab}` : `${s.tab_container}`} onClick={() => { toggleTab(3) }}>
                <p>
                  Contacts.jsx
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className={s.tabs_bot}>
          <div className={toggleState === 1 ? `${s.tabs_info}, ${s.content_active}` : `${s.tabs_info}`}>
            <About />
          </div>
          <div className={toggleState === 2 ? `${s.tabs_info}, ${s.content_active}` : `${s.tabs_info}`}>
            <ExperienceInfo />

          </div>
          <div className={toggleState === 3 ? `${s.tabs_info}, ${s.content_active}` : `${s.tabs_info}`}>
            <Contacts />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Header 