import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Main from './Sections/Main';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Experience from './Sections/Experience';
import Skills from './Sections/Skills';
import Education from './Sections/Education';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
  </div>
  );
}

export default App;
