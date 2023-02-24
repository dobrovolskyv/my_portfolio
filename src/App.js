import {Link, Routes, Route} from "react-router-dom"
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


  return (
    <div className="container">
      <div id="aura"></div>
      <div id="cursor"></div>
      <NavBar className="nav"/>
      <Header/>
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
