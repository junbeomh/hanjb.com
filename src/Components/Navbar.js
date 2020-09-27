import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledPastAbout: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ backgroundColor: "#026AE4" }}>
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <span className="nav-link" href="#" style={{ color: "#026AE4" }} onClick={this.scrollToTop}>JunBeom Han</span>
            </li>
          </ul>
        </div>
        <span className="navbar-brand" id="navbarName" href="#" style={{ color: "white" }} onClick={this.scrollToTop}>JunBeom Han</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "28px" }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto mx-auto">
            <li><Link activeClass="active" className="navItem" to="about" spy={true} smooth={true} duration={500} style={{ color: "rgba(255, 255, 255, 0.7)" }}> ABOUT </Link></li>
            <li><Link activeClass="active" className="navItem" to="projects" spy={true} smooth={true} duration={500} style={{ color: "rgba(255, 255, 255, 0.7)" }}> PROJECTS </Link></li>
            <li><Link activeClass="active" className="navItem" to="experience" spy={true} smooth={true} duration={500} style={{ color: "rgba(255, 255, 255, 0.7)" }}> EXPERIENCE </Link></li>
            <li><Link activeClass="active" className="navItem" to="skills" spy={true} smooth={true} duration={500} style={{ color: "rgba(255, 255, 255, 0.7)" }}> SKILLS </Link></li>
            <li><Link activeClass="active" className="navItem" to="education" spy={true} smooth={true} duration={500} style={{ color: "rgba(255, 255, 255, 0.7)" }}> EDUCATION </Link></li>
            <li><Link activeClass="active" className="navItem" to="contact" spy={true} smooth={true} duration={500} style={{ color: "rgba(255, 255, 255, 0.7)" }}> CONTACT </Link></li>
          </ul>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;