import React from 'react'
import s from "./Works.module.css"
import img from '../../img/img1.png'

function Works() {
  return (
    <div>
     <div className={s.works_wrapper}>
 
     <img src={img} alt="" />
     <p>Once the design is ready, it’s time to make your concept live. This is when my programming skills will be needed. I transform any designs to a high-quality end products with pixel-perfect check.</p>
     <p>Over the years I have spent time converting designs into
      pixel-perfect,
      performant,
      accessible
      and responsive applications/websites.
      I have always been excited about the entire development spectrum,
      so I frequently engage in backend.
      Well what can I say,
      I sincerely simply love working on ambitious projects with positive people
      in a conducive work environment.</p>
     </div>

    </div>
    
  )
}

export default Works