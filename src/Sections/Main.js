import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    padding: 200px 100px;
    height: 70vh;
    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
      height: 70vh;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
      height: 70vh;
    }
    &.fillHeight {
      padding: 0 150px;
      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  flex-direction: column;
  align-items: flex-start;
  h1 {
    margin: 0 0 30px 4px;
    color: white);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }
  p {
    margin: 20px 0 0;
    max-width: 500px;
  }
  .email-link {
    margin-top: 50px;
  }
`;


const App = () => {
    const [isMounted, setIsMounted] = useState(true);

    //   useEffect(() => {
    //     const timeout = setTimeout(() => setIsMounted(true), navDelay);
    //     return () => clearTimeout(timeout);
    //   }, []);

    const greet = <h1>Hi, my name is</h1>;
    const name = <h2 className="big-heading">JunBeom Han.</h2>;
    const position = <h3 className="big-heading"> Junior Software Engineer. </h3>;
    const description = (
        <p>
            I am a recent CS graduate based in Vancouver, BC, Canada. I enjoy building things
			and discover how they are made. Also, I love playing soccer, snowboarding, and surfing!
        </p>
    );
    const email = (
      <p><a> junbeomh94@gmail.com </a></p>
  );


    const items = [greet, name, position, description, email];

    return (
        <section id="main">
            <StyledHeroSection>
                    {isMounted &&
                        items.map((item, i) => (
                            <div key={i}>{item}</div>
                        ))}
            </StyledHeroSection>
        </section>

    );
};

export default App;