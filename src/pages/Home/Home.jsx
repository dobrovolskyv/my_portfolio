import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import Works from "../Works/Works"
import s from "./Home.module.css"


function HomeScreen() {

    
  
    return (
        <div className={s.content}>
                 <h1>HomeScreen</h1>    
                 <Works/>

        </div>
    )
}

export default HomeScreen