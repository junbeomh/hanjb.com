import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 99;
  color: ${props => props.theme.accentColorLight};
  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }
  @media (max-width: 991px) {
    display: none;
  }

  
`;

const SideNav = ({ children, orientation }) => {


  return (
    <StyledSideElement orientation={orientation}>
      <TransitionGroup component={null}>
        <CSSTransition classNames={'example'} timeout={10000}>
          {children}
        </CSSTransition>
      </TransitionGroup>
    </StyledSideElement>
  );
};

SideNav.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string,
};

export default SideNav;