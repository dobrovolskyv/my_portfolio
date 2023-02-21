import {Link, Routes, Route} from "react-router-dom"
import "./index.css"
import HomeScreen from './pages/Home/Home';
import Experience from "./pages/Experience/Experience";
import Contacts from "./pages/Contacts/Contacts";
import About from './pages/About/About'

// import {TweenMax, GSAP} from 'gsap';
import NavBar from './components/NavBar/NavBar';
import Bg from "./components/Info/Info";
import Works from "./pages/Works/Works";


function App() {


  return (
    <div className="container">
      <div id="aura"></div>
      <div id="cursor"></div>
      <NavBar/>
      <Bg/>
      <Routes>
       
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/about' element={<About/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
