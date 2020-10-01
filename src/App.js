import React, { useReducer, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { initialState, reducer } from "./Reducer";
import { GlobalStyles } from './global';
import CustomNavbar from "./Components/Navbar";
import Main from './Sections/Main';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Experience from './Sections/Experience';
import Skills from './Sections/Skills';
import Education from './Sections/Education';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;

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
      <ThemeProvider theme={currentTheme}>
        <AppContext.Provider value={{ ...state, dispatch }}>
          <GlobalStyles/>
          <CustomNavbar></CustomNavbar>
          <Gradients> </Gradients>
          <Main></Main>
          <About></About>
          <Projects></Projects>
          <Experience></Experience>
          <Education></Education>
          {/* <Skills></Skills> */}
          <Footer></Footer>
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
}



export default App;
