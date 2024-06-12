import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
function App() {

  return (
        <Router>
          <Routes>
          <Route path="/Navbar" element={<Navbar />} />

            <Route path="/" element={<Home />} />

            

          </Routes>
        </Router>
  )
}

export default App
