import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SCBC from "./components/pages/SCBC";
import Leadership from "./components/pages/Leadership";
import Awards from "./components/pages/Awards";
import Testimonials from "./components/pages/Testimonials";
import SCGL from "./components/pages/SCGL";
import SCGEPL from "./components/pages/SCGEPL";
import TLS from "./components/pages/TLS";
import SCPG from "./components/pages/SCPG";
import SCEDP from "./components/pages/SCEDP";
import Contact from "./components/pages/Contact";
import LoginPage from "./components/pages/auth/LoginPage";
import AccessDenied from "./components/pages/accessRequest/AccessDenied";
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/about" element={<About />} />
        <Route path="/scbc" element={<SCBC />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/scgl" element={<SCGL />} />
        <Route path="/scgepl" element={<SCGEPL />} />
        <Route path="/tls" element={<TLS />} />
        <Route path="/scpg" element={<SCPG />} />
        <Route path="/scedp" element={<SCEDP />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


