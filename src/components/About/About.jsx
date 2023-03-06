import React from 'react'
import s from "./About.module.scss"
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGithubBadge } from 'react-icons/di';
import { SiTypescript, SiFlutter, SiBlender } from 'react-icons/si';

function About() {
  return (
    <div className={s.about_container}>
      <div className={s.about_info}>
        <ul className={s.tabs_list}>
          <li className={s.tabs_item}>
            <p className={s.tabs_text}><span className={s.tabs_span}>1.</span> <span className={s.tabs_span_text}>&#60;p&#62;</span>  Im Vlados, a front-end developer based now in Batumi, Geaorgia. <span className={s.tabs_span_text}>&#60;/p&#62;</span></p>
          </li>
          <li className={s.tabs_item}>
            <p className={s.tabs_text}><span className={s.tabs_span}>2.</span> I’m currently working at ____: The digital agency that harness the power of brands. At ____ we work with start-ups as well as established brands, crafting phenomenal digital products to help bring brands stand out in the crowd.</p>
          </li>
          {/* <li className={s.tabs_item}>
            <p className={s.tabs_text}><span className={s.tabs_span}>3.</span> During my "spare" time, Im also working on freelance. This new fitness app helps you to reach your goals and stay on track with a sleek interface. It has everything from workout plans, food diary tools or even fasting tracker so there is no need for multiple apps anymore.</p>
          </li> */}
  
          <li className={s.tabs_item}>
            <p className={s.tabs_text}><span className={s.tabs_span}>3.</span> Over the years I have spent time converting designs into
              pixel-perfect, performant,accessible and responsive applications/websites.I have always been excited about the entire development spectrum. Well what can I say,I sincerely simply love working on ambitious projects with positive people
              in a conducive work environment.</p>
          </li>
          <li className={s.tabs_item}>
            <p className={s.tabs_text}><span className={s.tabs_span}>3.</span> My main focus these days is building accessible, exclusive products and digital experiences for a variety of clients. Here are a few technologies I’ve been working with recently: JavaScript (ES6+), TypeScript, React, React Native</p>
          </li>

        </ul>
      </div>
      <div className={s.skills}>
        <ul className={s.skills_list}>
          <li className={s.skills_item}>
            <div className={s.skills_box}>
              <DiHtml5 className={s.skills_img} />
              <div className={s.statusbar}>
              </div>
            </div>
          </li>
          <li className={s.skills_item}>
            <div className={s.skills_box}>
              <DiCss3 className={s.skills_img} />
              <div className={s.statusbar}>
              </div>
            </div>
          </li>
          <li className={s.skills_item}>
            <div className={s.skills_box}>
              <DiJavascript1 className={s.skills_img}/>
              <div className={s.statusbar_js}>
              </div>
            </div>
          </li>
          <li className={s.skills_item}>
            <div className={s.skills_box}>
              <DiReact className={s.skills_img}/>
              <div className={s.statusbar_react}>
              </div>
            </div>
          </li>
          <li className={s.skills_item}>
            <div className={s.skills_box}>
              <SiTypescript className={s.skills_img}/>
              <div className={s.statusbar_ts}>
              </div>
            </div>
          </li>
          <li className={s.skills_item}>
            <div className={s.skills_box}>
              <DiGithubBadge className={s.skills_img}/>
              <div className={s.statusbar_git}>
              </div>
            </div>
          </li>
          <li className={s.skills_item}>
            <div className={s.skills_box}>
              <SiFlutter className={s.skills_img}/>
              <div className={s.statusbar_flutter}></div>
            </div>
          </li>
          <li className={s.skills_item}>
            <div className={s.skills_box}>
              <SiBlender className={s.skills_img}/>
              <div className={s.statusbar_blender}>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default About