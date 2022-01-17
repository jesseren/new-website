import './App.css';
import React from 'react'
import Landing from './components/landing'
import Career from './components/career';
import Projects from './components/projects';
import About from './components/about';
import {BrowserRouter, Routes, Route,} from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/career" element={<Career />} />
      <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  );
}

export default App;
