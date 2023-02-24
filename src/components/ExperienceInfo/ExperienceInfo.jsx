import React from 'react'
import s from './ExperienceInfo.module.css'

function ExperienceInfo() {
  return (
    <div>
        <h2>Where I’ve Worked</h2>
        <div className={s.container}>
            <div className="left">
                <ul>
                    <li>
                        <p>Freelance</p>
                    </li>
                    <li>
                        <p> LMC</p>
                    </li>
                    <li>
                        <p></p>
                    </li>
                </ul>
                
               
            </div>
            <div className={s.right}>
                <h3>HTML-developer</h3>
                <p>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</p>
                <p>Software Engineer</p>
                <p>Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS
Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station</p>
            </div>
        </div>
    </div>
  )
}

export default ExperienceInfo