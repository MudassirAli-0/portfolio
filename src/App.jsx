import React from 'react'
// import Navbar from './Navbar'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'
// import Resume from './Resume'

function App() {
  return (

    // <>
    <BrowserRouter>
    <Routes>

    <Route path='/' element ={<Home/>}></Route>
    <Route path='/home' element ={<Home/>}></Route>
    {/* <Route path='/resume' element={<Resume/>} /> */}
    <Route path='/about' element ={<About/>}></Route>
    <Route path='/services' element ={<Services/>}></Route>
    <Route path='/projects' element ={<Projects/>}></Route>
    <Route path='/contact' element ={<Contact/>}></Route>
    
    
    </Routes>
    </BrowserRouter>
    // </>
  )
}

export default App