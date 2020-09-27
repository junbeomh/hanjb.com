import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import About from './Sections/About';
import Projects from './Sections/Projects';
import Experience from './Sections/Experience';
import Skills from './Sections/Skills';
import Education from './Sections/Education';
import Contact from './Sections/Contact';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
  </div>
  );
}

export default App;
