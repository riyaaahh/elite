import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import HoverButton from './Components/HoverButton';
import SectorExplore from './Components/SectorExplore';
import Home2 from './Components/Home2';


function App() {

  return (
        <Router>
          <Routes>
          <Route path="/Navbar" element={<Navbar />} />

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home2 />} />
            <Route path="/HoverButton" element={<HoverButton/>}/>
            <Route path="/SectorExplore" element={<SectorExplore/>}/>


            

          </Routes>
        </Router>
  )
}

export default App
