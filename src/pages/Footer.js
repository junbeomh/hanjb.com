import React from 'react';
import styled from 'styled-components';
import * as Constants from '../constants/strings';

const FooterWrapper = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 100px;
  padding: 15px;
  text-align: center;
  margin-top: 250px;
  h6{
    letter-spacing: 0.1em;
    font-weight: ${props => props.theme.fontWeightEmphasis};
  }
  #email {
    transition: all 0s ease-in;
    display: none;
    text-decoration: none;
    letter-spacing: 0.1em;
    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var( --color-blue);
      ;
    }
    @media (max-width: 991px) {
      display: block;
    }
  }
`;

const SocialLinks = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
    width: 100%;
    margin: 0 auto 10px;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      transition: all 0.3s ease-in;
      padding: 0px;
      .social-icons {
        margin-left:10px;
        width: 25px;
        height: 25px;
        &:hover,
        &:focus {
          transform: translateY(-3px);
          color: var( --color-blue);
          ;
        }
      }
    }
  }
`;


const Footer = () => {
  return (
    <FooterWrapper>
      <SocialLinks>
        <ul>
          <li>
            <a href={Constants.SOCIAL_NETWORKS.GITHUB}>
              <i className="social-icons fab fa-github"></i>
            </a>
            <a href={Constants.SOCIAL_NETWORKS.LINKEDIN}>
              <i className="social-icons fab fa-linkedin"></i>
            </a>
            <a href={`mailto:${Constants.SOCIAL_NETWORKS.EMAIL}`}>
              <i className="social-icons fas fa-paper-plane"></i>
            </a>
          </li>
        </ul>
      </SocialLinks>

      <span> &copy; {Constants.MAIN.NAME} </span>
      <a id="email" href={`mailto:${Constants.SOCIAL_NETWORKS.EMAIL}`}> <span>	{Constants.SOCIAL_NETWORKS.EMAIL} </span> </a>
    </FooterWrapper>
  );
};

export default Footer;