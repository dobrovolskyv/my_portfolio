import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import s from "./Footer.module.scss"

const Footer = () => {



  return (
    <div className={s.footer}>
        <p className={s.copyright}>&#169; 2023 dob dev. All rights reserved.</p>
        
    </div>
  )
}

export default Footer