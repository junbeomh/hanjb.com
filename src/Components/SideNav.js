import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import "../App.css"
// import { loaderDelay } from '@utils';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 99;
  color: var(--light-slate);
  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }
  @media (max-width: 991px) {
    display: none;
  }

  
`;

const SideNav = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledSideElement orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={'example'} timeout={10000} in={isMounted}>
            {children}
          </CSSTransition>
          
        )}
      
      </TransitionGroup>

    </StyledSideElement>
  );
};

SideNav.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
};

export default SideNav;