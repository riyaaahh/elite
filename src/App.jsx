import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import HoverButton from './Components/HoverButton';
import SectorExplore from './Components/SectorExplore';
import AboutUs from './Components/AboutUs';
import Lamborghini from './Components/Lamborghini';



function App() {

  return (
        <Router>
          <Routes>
          <Route path="/Navbar" element={<Navbar />} />

            <Route path="/" element={<Home />} />
            <Route path="/HoverButton" element={<HoverButton/>}/>
            <Route path="/SectorExplore" element={<SectorExplore/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/Lamborghini" element={<Lamborghini/>}/>



            

          </Routes>
        </Router>
  )
}

export default App
