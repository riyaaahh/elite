import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import HomeMob from './Components/HomeMob';
import HoverButton from './Components/HoverButton';

function App() {

  return (
        <Router>
          <Routes>
          <Route path="/Navbar" element={<Navbar />} />

            <Route path="/" element={<Home />} />
            <Route path="/HomeMob" element={<HomeMob/>}/>
            <Route path="/HoverButton" element={<HoverButton/>}/>


            

          </Routes>
        </Router>
  )
}

export default App
