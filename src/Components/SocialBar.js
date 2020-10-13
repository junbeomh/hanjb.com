import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import SideNav from './SideNav';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: '';
    display: block;
    width: 3px;
    height: 50px;
    margin: 0 auto;
  }

  div {
    margin-bottom: 0.25rem;
    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var(--color-yellow);
      ;
    }
  }
 
  a {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    text-decoration: none;
    letter-spacing: 0.3em;
    writing-mode: vertical-rl;
    margin-top: 0.75rem;
    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var(--color-yellow);
      ;
    }
    
  }
  li {
    padding: 10px;
    &:last-of-type {
    }
    a {
      .social-icons {
        width: 23px;
        height: 23px;
        &:hover,
        &:focus {
          transform: translateY(-3px);
          color: var(--color-yellow);
          ;
        }
      }
    }
  }
`;

const SocialBar = ({ isHome }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <SideNav isHome={isHome} orientation="right">
      <>
        <StyledSocialList>
          <div>
            <a onClick={scrollToTop}> <i className="fas fa-angle-double-up fa-2x"></i></a>
          </div>
          <a href={'mailto:junbeomh94@gmail.com'}>junboemh94@gmail.com</a>
          <li>
            <a href="https://github.com/junbeomh">
              <i className="social-icons fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/johnjbhan/">
              <i className="social-icons fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/hanjbbb/">
              <i className="social-icons fab fa-instagram"></i>
            </a>
          </li>
          <p></p>
        </StyledSocialList>
      </>
    </SideNav>
  );
};

SocialBar.propTypes = {
  isHome: PropTypes.bool,
};

export default SocialBar;