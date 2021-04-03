import React from 'react';
import styled from 'styled-components';
import * as Constants from '../constants/strings';

const StyledMainSection = styled.section`
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    padding: 100px 100px;
    height: 60vh;
    @media (max-width: 1080px) {
      padding: 100px 100px;
    }
    @media (max-width: 768px) {
      padding: 75px 50px;
      height: 70vh;
    }
    @media (max-width: 480px) {
      padding: 50px 25px;
      height: 70vh;
    }
  flex-direction: column;
  align-items: flex-start;
  h1 {
    margin: 50px 0 30px 4px;
    color: white);
    font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
    font-weight: 600;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h3 {
    margin-top: 10px;
    line-height: 0.9;
  }
  p {
    margin: 40px 0 0;
    max-width: 500px;
  }
  .email-link {
    letter-spacing: 0.1em;
    margin: 20px 0 0;

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: ${props => props.theme.accentColor};
    }
    }
`;


const Main = () => {
  const greet = <h1 className="text-accent">{Constants.MAIN.GREETING}</h1>;
  const name = <h2 className="big-heading">{Constants.MAIN.NAME}</h2>;
  const position = <h3 className="medium-heading"> {Constants.MAIN.POSITION} </h3>;
  const description = <p>   {Constants.MAIN.ABOUT_SHORT} </p>;
  const email = <p className="text-accent"><a className="email-link"  href={`mailto:${Constants.SOCIAL_NETWORKS.EMAIL}`}> {Constants.SOCIAL_NETWORKS.EMAIL} </a></p>;
  const items = [greet, name, position, description, email];

  return (
    <section id="main">
      <StyledMainSection>
        {
          items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
      </StyledMainSection>
    </section>

  );
};

Main.propTypes = {

}

export default Main;