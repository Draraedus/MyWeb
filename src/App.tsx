import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact/Contact";
import Github from "./pages/GitHub/Github";
import Courses from "./pages/Courses/Courses";
import Experiences from "./pages/Experiences/Experiences";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import LayoutWrapper from "./ui/components/logic/LayoutWrapper";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LayoutWrapper component={<Home />} />}
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route
          path="/Experiences"
          element={<LayoutWrapper component={<Experiences />} />}
        ></Route>
        <Route
          path="/Courses"
          element={<LayoutWrapper component={<Courses />} />}
        ></Route>
        <Route
          path="/Github"
          element={<LayoutWrapper component={<Github />} />}
        ></Route>
        <Route
          path="/Contact"
          element={<LayoutWrapper component={<Contact />} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
