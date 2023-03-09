import React from 'react'
import s from "./Works.module.scss"
import img from '../../img/img1.png'

function Works() {
  return (
    <div className={s.works}>
      <div className={s.works_wrapper}>
        <h2 className={s.works_title}>My projects</h2>
        <div className={s.works_content}>
          <div className={s.works_inner}>
            <div >
               <a href="https://dobrovolskyv.github.io/tester/" target="_blank" rel="noreferrer">
              <img className={s.works_img} src={img} alt="vokov fit" />

              </a>
            </div>
             
            <div className={s.works_inner_textbox}>
              <p className={s.works_undertitle}>&#60;project&#62;</p>
              <h3>Volkov-fit</h3>
              <p className={s.works_descr}>
                A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
              </p>
              <div>
              <ul className={s.works_list}>
                <li className={s.works_item}>
                  <p>GULP</p>
                </li>
                <li className={s.works_item}>
                  <p>SCSS</p>
                </li>
                <li className={s.works_item}>
                  <p>JAVASCRIPT</p>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>

  )
}

export default Works