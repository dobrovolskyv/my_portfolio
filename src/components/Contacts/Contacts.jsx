import React from 'react'
import s from './Contacts.module.scss'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaSpotify, FaLinkedinIn, FaExternalLinkAlt, FaGithub, FaArtstation } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'

function Contacts() {
  return (
    <div className={s.contacts_wrapper}>
      <div className={s.right}>
        <div className={s.contacts_email}>
          <p className={s.contacts_text}>Do you have any questions or would like to receive further information about my work? Feel free to contact me through the following links below or connect with me directly on social media.Let's have a chat and see to what kind of an amazing project we are headed to.</p>
          <form action="" className={s.form}>
            <div className={s.form_inputs}>
              <input className={s.form_input} type="text" placeholder='Name'/>
              <input className={s.form_input} type="email" pattern=".+@globex\.com" placeholder='Email'/>
            </div>
            <textarea className={s.form_textarea} name="" placeholder="Message"></textarea>
            <button className={s.form_btn}>Submit<HiOutlineMail /></button>
          </form>
        </div>
      </div>
      <div className={s.left}>
        <p className={s.socials_title}>My socials</p>
        <ul className={s.contacts_list}>
          <li>
            <a className={s.contacts_item_inner} href="https://github.com/dobrovolskyv" target='_blank' rel='noopener noreferrer'>
            <FaGithub className={s.contacts_img}/>
            <p className={s.contacts_item_text}>Github</p>
            </a>
          <FaExternalLinkAlt className={s.contacts_img}/>
          </li>
          <li className={s.contacts_item}>
            <a className={s.contacts_item_inner} href="https://www.facebook.com/dobrovolskyvo" target='_blank' rel='noopener noreferrer'>
            <FaFacebookF className={s.contacts_img}/>
            <p className={s.contacts_item_text}>Facebook</p>
            </a>
            <FaExternalLinkAlt className={s.contacts_img}/>
          </li>
          <li>
          <a className={s.contacts_item_inner} href="https://www.instagram.com/dobrovolsky_v" target='_blank' rel='noopener noreferrer'>
            <FaInstagram  className={s.contacts_img}/>
            <p className={s.contacts_item_text}>Instagram</p>
            </a>
          <FaExternalLinkAlt className={s.contacts_img}/>
          </li>
          <li>
          <a className={s.contacts_item_inner} href="https://t.me/dobrovolsky_v" target='_blank' rel='noopener noreferrer'>
            <FaTelegramPlane className={s.contacts_img}/>
            <p className={s.contacts_item_text}>Telegram</p>
            </a>
          <FaExternalLinkAlt className={s.contacts_img}/>
          </li>
          <li>
            <a className={s.contacts_item_inner} href="https://open.spotify.com/user/31ani36bhmnqqpqmnvajihjdanbm" target='_blank' rel='noopener noreferrer'>
            <FaSpotify  className={s.contacts_img}/>
            <p className={s.contacts_item_text}>Spotify</p>
            </a>
          <FaExternalLinkAlt className={s.contacts_img}/>
          </li>
          <li>
            <a className={s.contacts_item_inner} href="https://www.linkedin.com/in/vladislav-dobrovolsky-99a175237" target='_blank' rel='noopener noreferrer'>
            <FaLinkedinIn className={s.contacts_img}/>
            <p className={s.contacts_item_text}>LinkedIn</p>
            </a>
          <FaExternalLinkAlt className={s.contacts_img}/>
          </li>
          <li>
            <a className={s.contacts_item_inner} href="https://www.artstation.com/dobrovolsky_v" target='_blank' rel='noopener noreferrer'>
            <FaArtstation className={s.contacts_img}/>
            <p className={s.contacts_item_text}>ArtStation</p>
            </a>
          <FaExternalLinkAlt className={s.contacts_img}/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contacts