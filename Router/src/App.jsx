import React from "react"
import "./App.css"
import {Route, Routes}  from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./components/home"
import Contact from "./components/contact"
import About from "./components/about"

const App = () =>{
  
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;