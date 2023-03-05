import { useEffect, useState } from "react"
import s from "./Home.module.css"
import { motion } from "framer-motion"
import Header from '../../components/Header/Header'
import Works from "../Works/Works"





function HomeScreen() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      })
      const [cursorVariant, setCursorVarivant] = useState('default')
      
    
      useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY,
          })
        }
    
        window.addEventListener('mousemove', mouseMove);
    
        return () => {
          window.removeEventListener('mousemove', mouseMove)
        }
      }, [])
    
      const variants = {
        default: {
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
    
        },
        text: {
          width: 40,
          height: 40,
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          backgroundColor: 'rgb(232, 225, 225)',
          mixBlendMode: 'difference',
    
        }
      }
      const textEnter = () => setCursorVarivant('text')
      const textLeave = () => setCursorVarivant('default')
    
    
    
  
    return (
        <div className={s.content}>
             <motion.div id='cursor' variants={variants} animate={cursorVariant} />
            <Header  textEnter={textEnter} textLeave={textLeave} />
            <Works/>

        </div>
    )
}

export default HomeScreen