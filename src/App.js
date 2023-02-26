import { useState, useEffect } from "react";
import {Link, Routes, Route} from "react-router-dom"
import {motion} from "framer-motion"
import "./index.scss"
import HomeScreen from './pages/Home/Home';
import Experience from "./pages/Experience/Experience";
import About from './components/About/About'

// import {TweenMax, GSAP} from 'gsap';
import NavBar from './components/NavBar/NavBar';
import Header from "./components/Header/Header";
import Works from "./pages/Works/Works";
import Footer from "./components/Footer/Footer";



function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  const [cursorVariant, setCursorVarivant] =useState('default')

  useEffect(()=>{
    const mouseMove = e =>{
      setMousePosition({
        x: e.clientX ,
        y: e.clientY ,
        
      })

    }

    window.addEventListener('mousemove', mouseMove);

    return ()=>{
      window.removeEventListener('mousemove', mouseMove)
    }
  },[])

  const variants= {
    default:{
      x: mousePosition.x- 8,
      y: mousePosition.y- 8,
      
    },
    text:{
      width: 40,
      height: 40,
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: 'rgb(232, 225, 225)',
      mixBlendMode: 'difference' ,

    }
  }
  const textEnter=()=> setCursorVarivant('text')
  const textLeave=()=> setCursorVarivant('default')

  return (
    <div className="container">
     <motion.div id='cursor' variants={variants} animate={cursorVariant}/>
      <NavBar className="nav"/>
      
      <Header textEnter={textEnter} textLeave={textLeave}/>
    
      <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
