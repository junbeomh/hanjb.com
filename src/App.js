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
        <GlobalStyles />
        <Main></Main>
        <About></About>
        <Projects></Projects>
        <Experience></Experience>
        <Skills></Skills>
        <Education></Education>
        <Contact></Contact>
        <Footer></Footer>
        <Navbar></Navbar>

      </ThemeProvider>

    </div>
  );
}

export default App;
