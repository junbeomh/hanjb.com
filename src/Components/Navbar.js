import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Menu from './Menu'
import styled, { css } from 'styled-components';

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 100ms ease-in-out;
  }
  .hidden {
    visibility: hidden;
    transition: all 100ms ease-in-out;
    transform: translate(0, -100%);
    
  }
`;

const NavWrapper = styled.div`
`;


const Nav = styled.header`

-webkit-box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
-moz-box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  background-color: none;
  width: 100%;
  .navbar-brand-desktop {
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
  .navbar-brand-mobile {
    display: none;
    color: rgba(0, 0, 0, 0.5);
  }
  .navbar-brand-desktop, .navbar-brand-mobile {
    font-family: var(--font-name);
    font-size: var(--fz-name);
    font-weight: bold;
    margin-left: 1em;
    :hover {}
  }
  .navItem {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: var(--fz-xs);
    font-weight: bold;
    font-family: var(--font-main);
  }
  @media screen and (max-width: 991px) {
    .navbar-brand-mobile {
        display: inline;
        color: rgba(0, 0, 0, 1);
    }
    .navItem {
        margin-left: 2em;
        padding: 0.75rem;
    }
    .navbar-collapse {
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    }
    background-color: rgba(255, 255, 255, 0.7);
  }
`;


const Navbar = () => {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);


  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShow(document.body.getBoundingClientRect().top > scrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Transition>
      <NavWrapper className={show ? "active" : "hidden"}>
        <Nav className="navbar fixed-top navbar-expand-lg navbar-light" >
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a> <span className="navbar-brand-desktop" href="#" onClick={scrollToTop}> Jun Beom Han </span> </a>
              </li>
            </ul>
          </div>

          <span className="navbar-brand-mobile" href="#" onClick={scrollToTop}>JunBeom Han</span>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse navbarSupportedContent" id="navbarSupportedContent">
            <ul className="navbar-nav  ml-auto mx-auto">
              <Menu />
            </ul>
          </div>
        </Nav>
      </NavWrapper>
    </Transition>
  );
}

export default Navbar;    