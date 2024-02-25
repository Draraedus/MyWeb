import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Contact from './pages/Contact/Contact'
import Github from './pages/GitHub/Github'
import Courses from './pages/Courses/Courses'
import Experiences from './pages/Experiences/Experiences'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import AuthAndLayoutWrapper from './ui/components/logic/AuthAndLayoutWrapper'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<AuthAndLayoutWrapper component={<Home />}/>}></Route>
        <Route path="/Experiences" element={<AuthAndLayoutWrapper component={<Experiences />}/>}></Route>
        <Route path="/Courses" element={<AuthAndLayoutWrapper component={<Courses />}/>}></Route>
        <Route path="/Github" element={<AuthAndLayoutWrapper component={<Github />}/>}></Route>
        <Route path="/Contact" element={<AuthAndLayoutWrapper component={<Contact />}/>}></Route>
      </Routes>
    </Router>
  )
}

export default App