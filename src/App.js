import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Navbar from "./Components/Navbar";
import Main from './Sections/Main';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Experience from './Sections/Experience';
import Skills from './Sections/Skills';
import Education from './Sections/Education';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';
import Switch from "react-switch";
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {  }
  }

  Gradients = () => (
    <svg width="50" height="50" version="1.1" className="hidden">
      <defs>
        <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6ED0DD" />
          <stop offset="100%" stopColor="#70E2B9" />
        </linearGradient>
        <linearGradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#405D86" />
          <stop offset="100%" stopColor="#384257" />
        </linearGradient>
        <linearGradient id="gradient-3" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ED6088" />
          <stop offset="100%" stopColor="#C86FA3" />
        </linearGradient>
        <linearGradient id="gradient-4" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F07F6B" />
          <stop offset="100%" stopColor="#EFC15C" />
        </linearGradient>
        <linearGradient id="gradient-5" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8D63B1" />
          <stop offset="100%" stopColor="#8179CB" />
        </linearGradient>
        <linearGradient id="gradient-6" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#EDD460" />
          <stop offset="100%" stopColor="#EDBC39" />
        </linearGradient>
      </defs>
    </svg>
  );

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          {this.Gradients}
          <Navbar></Navbar>
          <Main></Main>
          <About></About>
          <Experience></Experience>
          <Education></Education>
          <Projects></Projects>
          <Skills></Skills>
          <Footer></Footer>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
