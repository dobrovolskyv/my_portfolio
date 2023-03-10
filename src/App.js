import { Routes, Route } from "react-router-dom"
import "./index.scss"
import HomeScreen from './pages/Home/Home';
import Experience from "./pages/Experience/Experience";                     
// import {TweenMax, GSAP} from 'gsap';
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";
import Devices from "./pages/Devices/Devices";
import ErrorPage from "./pages/ErrorPage/ErrorPage";




function App() {


  return (
    <div className="container">
      <NavBar className="nav" />
      <Routes >
        <Route path='/' element={<HomeScreen />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/devices' element={<Devices />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
