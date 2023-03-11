import React from 'react'
import { BsLaptop, BsFillKeyboardFill } from 'react-icons/bs'
import { FiMonitor } from 'react-icons/fi'
import { SlEarphones } from 'react-icons/sl'
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
              <BsLaptop className={s.devices_img} />
              <p className={s.devices_text}>Macbook Air 13 2020 M1 16gb</p>
            </li>
            <li className={s.devices_item}>
              <FiMonitor className={s.devices_img} />
              <p className={s.devices_text}>LG 29” HDR10 IPS Full HD UltraWide</p>
            </li>
            <li className={s.devices_item}>
              <SlEarphones className={s.devices_img} />
              <p className={s.devices_text}>AirPods Pro</p>
            </li>
            <li className={s.devices_item}>
              <BsFillKeyboardFill className={s.devices_img} />
              <p className={s.devices_text}>MARVO KG972W GASKET MOUNT MECHANICAL KEYBOARD</p>
            </li>
            <li className={s.devices_item}></li>
            <li className={s.devices_item}></li>
          </ul>
        </div>
      </div>
      <div className={s.technologies}>
        <h2 className={s.devices_title}>I'm work with next tools</h2>
        <div className={s.tool_contentbox}>
          <h3 className={s.tool}>GULP</h3>
          <p className={s.tool_subtitle}>
            The GULP project assembler helps in creating landings and multi-page sites. It helps speed up my work with HTML codes, styles, js code and minifies the size of the files, which subsequently speeds up the site. 
          </p>
        </div>
        <div className={s.tool_contentbox}>
          <h3 className={s.tool}>ReactJs</h3>
          <p className={s.tool_subtitle}>
            I use ReactJs for handling the heavy lifting, including rendering and bundling of our JavaScript assets while TypeScript helps ensure a reliable build process with minimal errors/warnings.
          </p>
        </div>
        <div className={s.tool_contentbox}>
          <h3 className={s.tool}>React Native/ Flutter</h3>
          <p className={s.tool_subtitle}>
            In my free time I study mobile development technologies. In the future, I want to develop multifunctional, cross-platform, cool applications that people will use in everyday life. So, if you have a desire to teach me this, then I will be very grateful :)
          </p>
        </div>
        <div className={s.tool_contentbox}>
          <h3 className={s.tool}>3D modeling</h3>
          <p className={s.tool_subtitle}>
            To unload my head from coding, I sometimes create 3d models. I create and render models in Blender, bake and textures in Substance Painter. I also sculpt models in Zbrush and recently Blender has been giving me good sculpting capabilities. I highly recommend sitting down and unpacking your head and making low-poly models!
          </p>
        </div>

      </div>
      <div className={s.about}>
        <h2 className={s.devices_title}> Something else about me</h2>
        <p className={s.tool_subtitle}>My stack of knowledge and experience is growing every day. I use some things more often, some less often, but at the moment I have worked with all these technologies: HTML5, CSS3, TypeScript, JavaScript, TailwindCss, SCSS, GULP ReactJs, Bootstrap, Materialize, three js, React Native, Flutter, Git</p>
      </div>
    </div>
  )
}

export default Devices