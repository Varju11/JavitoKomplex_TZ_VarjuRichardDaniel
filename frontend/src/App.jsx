import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from "./pages/Home"
import Tagozat from './pages/Tagozat'
import Navbar from './elements/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'tachyons'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tagozat/:id" element={<Tagozat />} />
      </Routes>
    </>
  )
}

export default App
