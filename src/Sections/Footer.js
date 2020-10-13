import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 100px;
  padding: 15px;
  text-align: center;
  margin-top: 150px;
  h6{
    letter-spacing: 0.1em;
  }
  #email {
    display: none;
    text-decoration: none;
    letter-spacing: 0.1em;
    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var(--color-yellow);
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
      padding: 0px;
      .social-icons {
        margin-left:10px;
        width: 25px;
        height: 25px;
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


const Footer = () => {
  return (
    <FooterWrapper>
      <SocialLinks>
        <ul>
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
        </ul>
      </SocialLinks>

      <h6> &copy; JunBeom Han</h6>
      <a id="email" href="mailto:junbeomh94@gmail.com"> <h6>	junbeomh94@gmail.com </h6> </a>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;