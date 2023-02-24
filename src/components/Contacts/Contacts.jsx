import React from 'react'
import s from './Contacts.module.scss'
import {FaFacebookF,FaInstagram,FaTelegramPlane,FaWhatsapp, FaLinkedinIn,FaExternalLinkAlt} from 'react-icons/fa' ;
import {HiOutlineMail} from 'react-icons/hi'

function Contacts() {
  return (
    <div>
      <p>Let's have a chat and see to what kind of an amazing project we are headed to. Drop me an email or contact me through my social medias, you are always welcome to say HI !!</p>
      <p> <HiOutlineMail/></p>
      <ul className={s.contacts_list}>
        <li><FaFacebookF/>
        <FaExternalLinkAlt/>
        </li>
        <li><FaInstagram/></li>
        <li><FaTelegramPlane/></li>
        <li><FaWhatsapp/></li>
        <li><FaLinkedinIn/></li>
      </ul>
    </div>
  )
}

export default Contacts