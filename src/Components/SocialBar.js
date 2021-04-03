import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import SideNav from './SideNav';
import * as Constants from '../constants/strings';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    transition: all 0.5s ease-in;
    content: '';
    display: block;
    width: 3px;
    height: 50px;
    background-color: ${props => props.theme.accentColorLight};
  }
  div {
    /* margin-bottom: 0.25rem; */
    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: ${props => props.theme.accentColor};
      ;
    }
  }
 
  a {
    color: ${props => props.theme.accentColorLight};
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    text-decoration: none;
    letter-spacing: 0.3em;
    font-weight: ${props => props.theme.fontWeightEmphasis};
    writing-mode: vertical-rl;
    margin-top: 0.85rem;
    transition: all 0ms linear;
    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: ${props => props.theme.accentColor};
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
        transition: all 0s ease-in;
        &:hover,
        &:focus {
          transform: translateY(-3px);
          color: ${props => props.theme.accentColor};
          ;
        }
      }
    }
  }
`;

const SocialBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <SideNav orientation="right">
      <>
        <StyledSocialList>
          <div>
            <span onClick={scrollToTop}> <i className="fas fa-angle-double-up fa-2x"></i></span>
          </div>
          {/* <a href={`mailto:${Constants.SOCIAL_NETWORKS.EMAIL}`}> {Constants.SOCIAL_NETWORKS.EMAIL} </a> */}
          <li>
            <a href={`mailto:${Constants.SOCIAL_NETWORKS.EMAIL}`}>
              <i className="social-icons fas fa-paper-plane"></i>
            </a>
            <a href={Constants.SOCIAL_NETWORKS.GITHUB}>
              <i className="social-icons fab fa-github"></i>
            </a>
            <a href={Constants.SOCIAL_NETWORKS.LINKEDIN}>
              <i className="social-icons fab fa-linkedin"></i>
            </a>
          </li>
          <p></p>
        </StyledSocialList>
      </>
    </SideNav>
  );
};


export default SocialBar;