import React from 'react';
import Layout from './Components/Layout';
import Main from './Sections/Main';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Experience from './Sections/Experience';
import Education from './Sections/Education';
import Contact from './Sections/Contact';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Layout>
        <Main></Main>
        <About></About>
        <Projects></Projects>
        <Experience></Experience>
        <Education></Education>
        {/* <Contact> </Contact> */}
      </Layout>
    </div>
  );
}

export default App;
