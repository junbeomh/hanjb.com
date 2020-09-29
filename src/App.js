import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
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
import { useTransition, animated } from 'react-spring';
import '../node_modules/font-awesome/css/font-awesome.min.css';


function App() {
  const [theme, setTheme] = useState('light');
  const [toggled, setToggled] = useState(false);

  const items = [<i className="social-icon far fa-sun"></i>, <i className="social-icon far fa-moon"></i>];

  const toggleTheme = () => {
    setToggled(!toggled);
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const transition = useTransition(items[+toggled], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });

  const Gradients = () => (
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

  return (
    <div className="App">

      {/* <div className="simple-trans-main" style={{ position: "relative", zIndex: "1" }} onClick={() => toggleTheme()}>
        {transition((values, item) => (
          <animated.div style={values}>
            {item}
          </animated.div>
        ))}
      </div> */}


      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Gradients> </Gradients>
        <Navbar></Navbar>
        <Main></Main>
        <About></About>
        <Projects></Projects>
        <Experience></Experience>
        <Skills></Skills>
        <Education></Education>
        <Contact></Contact>
        <Footer></Footer>
      </ThemeProvider>

    </div>
  );
}

export default App;
