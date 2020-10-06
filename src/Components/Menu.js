import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import ThemeSwitch from './ThemeSwitch';

const NavItem = styled.li`
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: var(--fz-xxs);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
  
`;
const Menu = () => {
    const SCROLL_OFFSET = 0;

    return (
        <>
            <li><Link activeClass="navbar-active" className="navItem" to="about" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} > ABOUT </Link></li>
            <li><Link activeClass="navbar-active" className="navItem" to="projects" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} > PROJECTS </Link></li>
            <li><Link activeClass="navbar-active" className="navItem" to="experience" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} > EXPERIENCE </Link></li>
            <li><Link activeClass="navbar-active" className="navItem" to="education" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500}> EDUCATION </Link></li>
            {/* <li><Link activeClass="active" className="navItem" to="contact" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> CONTACT </Link></li> */}
            <ThemeSwitch />
            {/* <Link activeClass="active" className="navItem" to="about" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> ABOUT </Link>
            <Link activeClass="active" className="navItem" to="projects" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> PROJECTS </Link>
            <Link activeClass="active" className="navItem" to="experience" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> EXPERIENCE </Link>
            <Link activeClass="active" className="navItem" to="education" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> EDUCATION </Link>
            <Link activeClass="active" className="navItem" to="contact" offset={SCROLL_OFFSET} spy={true} smooth={true} duration={500} style={{ color: "rgba(0, 0, 0, 0.5)" }}> CONTACT </Link> */}
        </>
    );
}

export default Menu;