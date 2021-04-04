import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import Switch from "react-switch";
import styled from 'styled-components';
import * as Constants from '../constants/strings';
import ThemeSwitch from './ThemeSwitch';

const StyledNavWrapper = styled.div`
  box-sizing: border-box;
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
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
    font-weight: ${props => props.theme.fontWeightEmphasis};
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
    background-color: ${props => props.theme.accentColor};
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
      width: 75%;
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
      color: ${props => props.theme.accentColor};
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
      width: 75%;
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

  /* .transition {
    transition: all 0.3s ease-in;
  } */
  
`;



const Navbar = ({ children }) => {
  const SCROLL_OFFSET = -275;


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
  }, []);

  return (
    <StyledNavWrapper>
      <StyledNav className="styled-nav">
        <div className="logo" onClick={scrollToTop}>
          <h4> JBH </h4>
        </div>

        <ul className="nav-links">
          <li>
            <Link
              activeClass="navbar-active"
              className="navItem" to="about"
              offset={SCROLL_OFFSET}
              spy={true}
              smooth={true} 
              uration={500} >
              {Constants.ABOUT.TITLE.split(".")}
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar-active"
              className="navItem"
              to="projects"
              offset={SCROLL_OFFSET}
              spy={true}
              smooth={true}
              duration={500}>
              {Constants.PROJECTS.TITLE.split(".")}

            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar-active"
              className="navItem"
              to="experience"
              offset={SCROLL_OFFSET}
              spy={true}
              smooth={true} 
              uration={500} >
              {Constants.EXPERIENCE.TITLE.split(".")}

            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar-active"
              className="navItem" to="education"
              offset={SCROLL_OFFSET}
              spy={true}
              smooth={true}
              duration={500}>
              {Constants.EDUCATION.TITLE.split(".")}
            </Link>
          </li>
          <li>
            <ThemeSwitch />
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