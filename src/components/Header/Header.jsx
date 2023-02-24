import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import s from "./Header.module.scss"
import {DiHtml5, DiCss3,DiJavascript1,DiReact, DiGithubBadge} from 'react-icons/di'
import {SiTypescript,SiFlutter,SiBlender} from 'react-icons/si'
import Contacts from '../Contacts/Contacts.jsx'
import ExperienceInfo from '../ExperienceInfo/ExperienceInfo';



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
          <div className={toggleState === 1 ? `${s.tab}`  : `${s.tab_container}`} onClick={() => { toggleTab(1) }}>
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
        
        <div className={s.content_tabs}>
          <div className={toggleState === 1 ? `${s.tabs_info}, ${s.content_active}` : `${s.tabs_info}`}>
            <h2> content 1 </h2>
            <ul className={s.tabs_list}>
              <li className={s.tabs_item}>
                <p>Im Ugi Stelmokaitis, a software engineer and entrepreneur based in Sydney, Australia.</p>
              </li>
              <li className={s.tabs_item}>
                <p>I’m currently working at Priffle: The digital agency that harness the power of brands. At Priffle we work with start-ups as well as established brands, crafting phenomenal digital products to help bring brands stand out in the crowd.</p>
              </li>
              <li className={s.tabs_item}>
                <p>During my "spare" time, Im also working on Aezthetics app. This new fitness app helps you to reach your goals and stay on track with a sleek interface. It has everything from workout plans, food diary tools or even fasting tracker so there is no need for multiple apps anymore.</p>
              </li>
            </ul>
              <ul className={s.skills}>
                <li>
                  
                  <DiHtml5/>
                  <div className={s.load}></div></li>
                <li><DiCss3/></li>
                <li><DiJavascript1/></li>
                <li><DiReact/></li>
                <li><SiTypescript/></li>
                <li><DiGithubBadge/></li>
                <li><SiFlutter/></li>
                <li><SiBlender/></li>
              </ul>
          </div>
          <div className={toggleState === 2 ? `${s.tabs_info}, ${s.content_active}` : `${s.tabs_info}`}>
           <ExperienceInfo/>

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