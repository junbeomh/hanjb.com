import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Icon } from '@components/icons';
// import { socialMedia } from '@config';

const FooterWrapper = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 100px;
  padding: 15px;
  text-align: center;
  margin-top: 150px;
  #email {
    display: none;
    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: #DBA111;
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
    color: ;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      padding: 0px;
        &:hover,
        &:focus {
          transform: translateY(-3px);
        }
      .social-icons {
        margin-left:10px;
        width: 25px;
        height: 25px;
        &:hover,
        &:focus {
          transform: translateY(-3px);
          color: #DBA111;
          ;
        }
      }
    }
  }
`;

const Credits = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
  a {
    padding: 5px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialLinks>
        <ul>
          <li>
            <a>
              <i className="social-icons fab fa-github"></i>
            </a>
            <a>
              <i className="social-icons fab fa-linkedin"></i>
            </a>
            <a>
              <i className="social-icons fab fa-instagram"></i>
            </a>
            <a>
              <i className="social-icons fas fa-paper-plane"></i>
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