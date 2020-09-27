import React from 'react';
import { Link } from 'react-scroll';

class Navbar extends React.Component {
  render() {
    return (
      //   <nav className="navbar navbar-default navbar-fixed-top">
      //   <div className="container-fluid">
      //     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      //       <ul className="nav navbar-nav">
      //         <li><Link activeClass="active" className="navItem" to="about" spy={true} smooth={true} duration={500} > About</Link></li>
      //         <li><Link activeClass="active" className="navItem" to="projects" spy={true} smooth={true} duration={500}> Projects </Link></li>
      //         <li><Link activeClass="active" className="navItem" to="experience" spy={true} smooth={true} duration={500} > Experience </Link></li>
      //         <li><Link activeClass="active" className="navItem" to="skills" spy={true} smooth={true} duration={500}>Skills </Link></li>
      //         <li><Link activeClass="active" className="navItem" to="education" spy={true} smooth={true} duration={500}> Education </Link></li>
      //         <li><Link activeClass="active" className="navItem" to="contact" spy={true} smooth={true} duration={500}> Contact </Link></li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav  ml-auto mx-auto">
              <li><Link activeClass="active" className="navItem" to="about" spy={true} smooth={true} duration={500} > About </Link></li>
              <li><Link activeClass="active" className="navItem" to="projects" spy={true} smooth={true} duration={500}> Projects </Link></li>
              <li><Link activeClass="active" className="navItem" to="experience" spy={true} smooth={true} duration={500} > Experience </Link></li>
              <li><Link activeClass="active" className="navItem" to="skills" spy={true} smooth={true} duration={500}>Skills </Link></li>
              <li><Link activeClass="active" className="navItem" to="education" spy={true} smooth={true} duration={500}> Education </Link></li>
              <li><Link activeClass="active" className="navItem" to="contact" spy={true} smooth={true} duration={500}> Contact </Link></li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;