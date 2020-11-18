import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import * as Constants from '../Constants/strings';


const StyledNavWrapper = styled.div`
  box-sizing: border-box;
  -webkit-box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }

  .hidden {
    visibility: hidden;
    transation: all 200ms ease-out;
    transfrom: translate(0, -100%);
  }
`;
const StyledNav = styled.nav`
  display: flex;
  z-index:99;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: fixed;
  min-height: 5vh;
  width: 100%;
  background-color: ${props => props.theme.navColor};
  transition: all 0.3s ease-in;

  .logo {
    text-transform: uppsercase;
    letter-spacing: 5px;
    cursor: pointer;
    margin-top: 0.25rem;
    margin-left: 4rem;
    color: white;
  }

  .nav-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 60%;
    margin-top: 0.75rem;
  }

  .nav-links li{
    list-style: none;
    margin-right: 2rem;
    color:white
  }

  .themeSwitch {
    display: flex;
    align-items: center;
  }

  .nav-links Link{
    color: white;
    text-decoration: none;
    letter-spacing: 3px;
  }

  .burger{
    display: none;
    cursor: pointer;
    margin-right: 2rem;
  }

  .burger div {
    width: 25px;
    height: 3px;
    background-color: rgb(226, 226, 266);
    margin: 5px;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px){    
    .nav-links {
      position: fixed;
      justify-content: space-around;
      right: 0px;
      height: 95vh;
      top: 5vh;
      background-color: ${props => props.theme.navColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      transform: translateX(100%);
      margin-top:0rem;
    }

    .nav-links li{
      list-style: none;
      margin-right: 0rem;
    }

    .logo {
      margin-top: 0.25rem;
      margin-left: 2rem;
    }

    .nav-links li {
      opacity: 1;
    }

    .burger {
      display: block;
    }
  }

  @media screen and (max-width: 480px){    
    .nav-links {
      position: fixed;
      justify-content: space-around;
      right: 0px;
      height: 95vh;
      top: 5vh;
      background-color: ${props => props.theme.navColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      transform: translateX(100%);
      margin-top:0rem;
    }

    .nav-links li{
      list-style: none;
      margin-right: 2rem;
    }

    .logo {
      margin-top: 0.25rem;
      margin-top: 0.75rem;
    }

    .nav-links li {
      opacity: 1;
    }

    .burger {
      display: block;
    }
  }

  .nav-active {
    transform: translateX(0%);
  }

  .toggle .line1{
    transform: rotate(-45deg) translate(-5px, 6px);

  }

  .toggle .line2{
    opacity:0;
  }

  .toggle .line3{
    transform: rotate(45deg) translate(-5px, -6px);
  }

  .transition {
    transition: all 0.3s ease-in;
  }
  .
`;



const Navbar = ({ children }) => {
  const SCROLL_OFFSET = -150;
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);


  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {

      // Toggle Nav
      nav.classList.toggle('nav-active');
      nav.classList.add('transition');    //add transition class

      // Burger Animation
      burger.classList.toggle('toggle');
    })

    // remove transition class
    window.addEventListener(
      'resize',
      () => {
        if (window.innerWidth > 1035) {
          nav.classList.remove('transition');
        }
      },
      false
    );
  }


  useEffect(() => {
    navSlide();

  }, [show, navSlide]);

  return (
    <StyledNavWrapper>
      <StyledNav className="styled-nav">
        <div className="logo" onClick={scrollToTop}>
          <h4> JBH </h4>
        </div>

        <ul className="nav-links">
          <li>
            <Link activeClass="navbar-active" className="navItem" to="about" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} >
              {Constants.ABOUT.TITLE}
            </Link>
          </li>
          <li>
            <Link activeClass="navbar-active" className="navItem" to="projects" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500}>
              {Constants.PROJECTS.TITLE}

            </Link>
          </li>
          <li>
            <Link activeClass="navbar-active" className="navItem" to="experience" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} >
              {Constants.EXPERIENCE.TITLE}

            </Link>
          </li>
          <li>
            <Link activeClass="navbar-active" className="navItem" to="education" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500}>
              {Constants.EDUCATION.TITLE}
            </Link>
          </li>
          <li>
            {children}
          </li>
        </ul>
        <div className="burger">
          <div className="line1">  </div>
          <div className="line2">  </div>
          <div className="line3">  </div>
        </div>
      </StyledNav>
    </StyledNavWrapper>
  );
}

export default Navbar;    