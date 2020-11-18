import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import SideNav from './SideNav';
import * as Constants from '../Constants/strings';

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

const SocialBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <SideNav orientation="right">
      <>
        <StyledSocialList>
          <div>
            <a onClick={scrollToTop}> <i className="fas fa-angle-double-up fa-2x"></i></a>
          </div>
          <a  href={`mailto:${Constants.SOCIAL_NETWORKS.EMAIL}`}> {Constants.SOCIAL_NETWORKS.EMAIL} </a>
          <li>
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