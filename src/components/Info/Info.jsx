import React , {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import s from "./Info.module.css"
import { CiCoffeeCup } from 'react-icons/ci'



function Bg() {

  const [toggleState, setToggleState] = useState(1);

  function toggleTab (index){
      setToggleState(index)
  }

  return (
    <div className={s.container}>
      <div className={s.time_wrapper}>
        <CiCoffeeCup className={s.time_icon} />
        <p className={s.time_text}>I'm currently drink coffee</p>
      </div>
      <div className={s.info__present}>
        <h1 className={s.title}>Hello, I'm Vlados</h1>
        <p className={s.subtitle}>I'm a Front-end developer who has unending enthusiasm for solving problems and learning new knowledge.</p>
      </div>
      <div className={s.tab_wrapper}>
        <div className={s.tabs_content}>
          <div className={toggleState === 1 ? `${s.tab_container}` : `${s.tab}`} onClick={()=>{toggleTab(1)}}>
            <p>
              About.jsx
            </p>
          </div>
          <div className={toggleState === 2 ? `${s.tab_container}` : `${s.tab}`} onClick={()=>{toggleTab(2)}}>
            <p>
              Contacts
            </p>
          </div>
          <div className={toggleState === 3 ? `${s.tab_container}` : `${s.tab}`} onClick={()=>{toggleTab(3)}}>
            <p>
              Experience
            </p>
          </div>
          <div className={toggleState === 4 ? `${s.tab_container}` : `${s.tab}`} onClick={()=>{toggleTab(4)}}>
            <p>
              Work
            </p>
          </div>
        </div>
        <div className={s.content_tabs}>
          <div className={toggleState === 1 ? `${s.tabs_info}, ${s.content_active}` : `${s.tabs_info}`}>
            <h2>content 1</h2>
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
          </div>
          <div className={toggleState === 2 ? `${s.tabs_info}, ${s.content_active}` : `${s.tabs_info}`}>
            <h2>content 2</h2>
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
          </div>
          <div className={toggleState === 3 ? `${s.tabs_info}, ${s.content_active}` : `${s.tabs_info}`}>
            <h2>content 3</h2>
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
          </div>

        </div>

      </div>
      {/* <div className={s.tab_wrapper}>
        <div className={s.tabs_content}>
          <Link to='/about' className={s.tab_container}>
            <div>
              <p>
                About.jsx
               
              </p>
            </div>
          </Link>

          <Link to='/contacts' className={s.tab_container}>
            <p>
              Contacts
            </p>
          </Link>
          <Link to='/experience' className={s.tab_container}>
            <p>
              Experience
            </p>
          </Link>
          <Link to='/works' className={s.tab_container}>
            <p>
              Work
            </p>
          </Link>
        </div>
        <div className={s.tabs_info}>
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
        </div>
      </div> */}
    </div>
  )
}

export default Bg