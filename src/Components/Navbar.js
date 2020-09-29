import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Controller } from 'react-spring';
import ThemeButton from '../Components/AppThemeHook';

const SCROLL_OFFSET = -400;

class Navbar extends React.Component {
  state = {
    showButton: false,
    triggerThreshold: null,
  }

  animations = new Controller({ opacity: 0 });


  componentDidMount() {
    let aboutHeight = document.getElementById('main').clientHeight;

    this.setState({
      triggerThreshold: aboutHeight - (-SCROLL_OFFSET)
    })
    window.addEventListener('scroll', this.showText);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showText);
  }

  showText = () => {
    if (window.scrollY >= this.state.triggerThreshold) {
      this.setState({
        showButton: true
      });
    } else {
      this.setState({
        showButton: false
      });
    }
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };


  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ backgroundColor: "none" }}>
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <span className="nav-brand2" href="#" style={this.state.showButton ? { color: "#000" } : { color: "#7de2fc" }} onClick={this.scrollToTop}>JunBeom Han</span>
            </li>
          </ul>
        </div>
        <span className="navbar-brand" id="navbarName" href="#" style={{ color: "black" }} onClick={this.scrollToTop}>JunBeom Han</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto mx-auto">
            <li><Link activeClass="active" className="navItem" to="about" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.7)" }}> ABOUT </Link></li>
            <li><Link activeClass="active" className="navItem" to="projects" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.7)" }}> PROJECTS </Link></li>
            <li><Link activeClass="active" className="navItem" to="experience" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.7)" }}> EXPERIENCE </Link></li>
            <li><Link activeClass="active" className="navItem" to="skills" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.7)" }}> SKILLS </Link></li>
            <li><Link activeClass="active" className="navItem" to="education" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.7)" }}> EDUCATION </Link></li>
            <li><Link activeClass="active" className="navItem" to="contact" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.7)" }}> CONTACT </Link></li>
          </ul>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="social-icons nav-item">
              {/* <ThemeButton> </ThemeButton> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;