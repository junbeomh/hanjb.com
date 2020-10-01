import React, { useState, useContext, useEffect, } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ThemeButton from '../Components/AppThemeHook';
import { AppContext } from '../App';
import Switch from "react-switch";

const SCROLL_OFFSET = -200;

function Navbar() {

  const [showButton, setButtonVisibility] = useState(false);
  const [checked, setChecked] = useState(false);

  const { dispatch } = useContext(AppContext);

  const toggleTheme = () => {
    dispatch({ type: "toggleTheme" });
    setChecked(!checked);
  };

  useEffect(() => {
    const aboutHeight = document.getElementById('main').clientHeight;
    const showText = () => {
      if (window.scrollY >= aboutHeight) {
        setButtonVisibility(true);
      } else {
        setButtonVisibility(false);
      }
    }
    // subscribe event
    window.addEventListener("scroll", showText);
    return () => {
      // unsubscribe event
      window.removeEventListener("scroll", showText);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ backgroundColor: "none" }}>
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <span className="nav-brand2" href="#" style={showButton ? { color: "#000" } : { color: "#7de2fc" }} onClick={scrollToTop}>JunBeom Han</span>
          </li>
        </ul>
      </div>
      <span className="navbar-brand" id="navbarName" href="#" style={{ color: "black" }} onClick={scrollToTop}>JunBeom Han</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ml-auto mx-auto">
          <li><Link activeClass="active" className="navItem" to="about" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> ABOUT </Link></li>
          <li><Link activeClass="active" className="navItem" to="experience" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> EXPERIENCE </Link></li>
          <li><Link activeClass="active" className="navItem" to="education" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> EDUCATION </Link></li>
          <li><Link activeClass="active" className="navItem" to="projects" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> PROJECTS </Link></li>
          <li><Link activeClass="active" className="navItem" to="skills" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> SKILLS </Link></li>
          {/* <li><Link activeClass="active" className="navItem" to="contact" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.7)" }}> CONTACT </Link></li> */}
        </ul>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="social-icons nav-item">
            <i className="social-icon fas fa-paper-plane"></i>
            <i className="social-icon fab fa-linkedin"></i>
            <i className="social-icon fab fa-github"></i>
            <label>
              <Switch
                onChange={toggleTheme}
                checked={checked}
                className="react-switch"
                handleDiameter={26}
                offColor="#131862"
                onColor="#ef8e38 "
                offHandleColor="#7de2fc"
                onHandleColor="#000"
                height={36}
                width={60}
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "orange",
                    }}
                  >  🌙 </div>
                }

                checkedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "orange",
                    }} > ☀️   </div>
                }
              />
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;    