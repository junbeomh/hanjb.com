import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Menu from './Menu'
import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import ThemeSwitch from '../Components/ThemeSwitch';

const StyledNavWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  -webkit-box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  @media screen and (max-width: 768px){
    // overflow-x: auto;
  }

`;


const StyledNav = styled.nav`
  display: flex;
  z-index:99;

  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  position: fixed;
  min-height: 5vh;
  width: 100%;
  background-color: black;

  .logo {
    text-transform: uppsercase;
    letter-spacing: 5px;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    justify-content: space-evenly;
    width: 40%;
  }

  .nav-links li{
    list-style: none;
  }

  .nav-links Link{
    color: white;
    text-decoration: none;
    letter-spacing: 3px;
  }

  .burger{
    display: none;
    cursor: pointer;
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
      right: 0px;
      height: 95vh;
      top: 5vh;
      background-color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      transform: translateX(100%);
      // transition: transform 0.5s ease-in;
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

  // @keyframes navLinkFade{
  //   from {
  //     opacity: 0;
  //     transform: translateX(50px);
  //   }

  //   to {
  //     opacity: 1;
  //     transform: translateX(0px);
  //   }
  // }
  .
`;




const Navbar = () => {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const SCROLL_OFFSET = 0

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShow(document.body.getBoundingClientRect().top > scrollPos);
  };

  useEffect(() => {
    navSlide();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');

    burger.addEventListener('click', () => {

      // Toggle Nav
      nav.classList.toggle('nav-active');

      // Burger Animation
      burger.classList.toggle('toggle');
    })


    //Animate Links
    // Object.keys(navLinks).forEach((link, index)=>{
    //   link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7}s`
    // })
  }

  return (
    <StyledNavWrapper>
      <StyledNav>
        <div className="logo" onClick={scrollToTop}>
          <h4> JBH </h4>
        </div>

        <ul className="nav-links">
          <li>
            <Link activeClass="navbar-active" className="navItem" to="about" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} >
              ABOUT
                </Link>
          </li>
          <li>
            <Link activeClass="navbar-active" className="navItem" to="projects" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500}
            > PROJECTS
            </Link>
          </li>
          <li>
            <Link activeClass="navbar-active" className="navItem" to="experience" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} >
              EXPERIENCE
               </Link>
          </li>
          <li>
            <Link activeClass="navbar-active" className="navItem" to="education" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500}>
              EDUCATION
             </Link>
          </li>
          <li>
            <a href="#">
              <ThemeSwitch />
            </a>
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