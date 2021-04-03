import React from 'react';
import Layout from './Layout';
import Main from '../pages/Main';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Footer from '../pages/Footer';


function App() {
  return (
    <div className="App">
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
