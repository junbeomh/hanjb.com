import React from 'react';
import { connect } from 'react-redux'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Layout from './Layout';
import Main from '../pages/Main';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Footer from '../pages/Footer';


function App() {
  const children = [<Main />, <About />, <Projects />, <Experience />, <Education />, <Footer />];

  return (
    <div className="App">
      <Layout>
        {children && children.map((child, i) => {
          return <div key={child.id}> {child} </div>
        })}
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.themeSwitchReducer.theme,
  }
}

export default connect(mapStateToProps)(App);
