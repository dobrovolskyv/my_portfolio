import React from 'react'
import s from "./About.module.css"

function About() {
  return (
    <div>
       <div className={s.tabs_info}>
          <ul className={s.tabs_list}>
            <li className={s.tabs_item}>
              <p> Im Ugi Stelmokaitis, a software engineer and entrepreneur based in Sydney, Australia. </p>
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
  )
}

export default About