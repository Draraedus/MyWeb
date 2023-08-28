import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Contact from './pages/Contact/Contact'
import Github from './pages/GitHub/Github'
import Courses from './pages/Courses/Courses'
import Experiences from './pages/Experiences/Experiences'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import AuthAndLayoutPageContainer from './components/logic/AuthAndLayoutPageContainer'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        {/* <Route path="/Home" element={<Home />}></Route> */}
        <Route path="/Home" element={<AuthAndLayoutPageContainer component={<Home />}/>}></Route>
        <Route path="/Experiences" element={<AuthAndLayoutPageContainer component={<Experiences />}/>}></Route>
        <Route path="/Courses" element={<AuthAndLayoutPageContainer component={<Courses />}/>}></Route>
        <Route path="/Github" element={<AuthAndLayoutPageContainer component={<Github />}/>}></Route>
        <Route path="/Contact" element={<AuthAndLayoutPageContainer component={<Contact />}/>}></Route>
      </Routes>
    </Router>
  )
}

export default App