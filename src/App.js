import React from 'react';
import Layout from './Components/Layout';
import Main from './Sections/Main';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Experience from './Sections/Experience';
import Education from './Sections/Education';
import CustomNavbar from "./Components/Navbar";

import Contact from './Sections/Contact';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Footer from './Sections/Footer';


function App() {
  return (
    <div className="App">
      {/* <CustomNavbar /> */}
      <Layout>
        <Main></Main>
        <About></About>
        <Projects></Projects>
        <Experience></Experience>
        <Education></Education>
        <Footer> </Footer>
      </Layout>
    </div>
  );
}

export default App;
