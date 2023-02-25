import React from 'react'
import s from './ExperienceInfo.module.scss'

function ExperienceInfo() {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Where I’ve Worked</h2>
            <div className={s.contentbox}>

                <div className={s.works_list}>
                    <div className={s.works_item}>
                        <p className={s.works_text}>&#60;Freelance&#62; </p>
                        <p className={s.works_date}>2021 - present</p>
                    </div>
                    <div className={s.works_box}>
                        <p className={s.works_position}>Software Engineer</p>
                        <p className={s.works_stack}>HTML,SCSS, JAVASCRIPT, GULP</p>
                        <p className={s.works_descr}>Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS
                            Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station</p>
                    </div>
                </div>
                <div className={s.works_list}>
                    <div className={s.works_item}>
                        <p className={s.works_text}>&#60;LMC&#62;</p>
                        <p className={s.works_date}>2022 (september - december)</p>
                    </div>
                    <div className={s.works_box}>
                        <p className={s.works_position}>HTML-developer</p>
                        <p className={s.works_stack}>HTML,SCSS, JAVASCRIPT, GULP</p>
                        <p className={s.works_descr}>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceInfo