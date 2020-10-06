import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profileImage from '../img/profile.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../App.css';
const PAGE_NAME = "01. ABOUT."

const ContentWrapper = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
    .resume-content-title {
        margin-top: 3rem;
        margin-bottom: 5rem;
    }
`;

const AboutContainer = styled.div`
    max-width: 50rem;
    border-radius: 10px;
    padding: 2rem;
`;

const StyledText = styled.div`
  margin-right: 1rem;
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #DBA111;
        }
      }
      
  }
`;


const ImageWrapper = styled.div`
        display: flex;
        justify-content: center;
        margin: 30px auto 0;

        background-color: #034694;
        
    #profile-pic {
        width: 100%;
        height: auto;
        border-radius: 3px;
      }
      @media (max-width: 768px) {
        margin: 30px auto 0;
        width: 85%;
      }
      @media (max-width: 480px) {
        margin: 30px auto 0;
        width: 70%;
      }

      
      #profile-pic:hover {
        opacity: 0.6;
      }
      .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;

  opacity: 0;
  transition: .5s ease;
  background-color: rgba(219,161,17, 0.5);
  
}

:hover .overlay {
  opacity: 1;
}

.text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  }
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    margin: 40px auto 0;

    button {
        width: 60%;
        height: 50px;
        border-radius: 5px;
        font-size: var(--fz-xl);
        background: transparent;

    }
    @media (min-width: 768px) {
        margin: 40px auto 0;

    }
  }
`;



const About = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 1000);
        return () => clearTimeout(timeout);
    }, []); const skills = ['JavaScript (ES6+)', 'HTML & (S)CSS', 'React', 'Vue', 'Node.js', 'WordPress', 'Node.js', 'WordPress'];
    return (
        <section id="about">
            <ContentWrapper>
                <div className="resume-content-title" style={{}}>
                    <p className="header-number" style={{ color: "#DBA111", fontSize: "25px", verticalAlign: "top"}}> 01. &nbsp;&nbsp;</p>
                    <p className="header" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "33px", lineHeight: "10px", position: "relative", }}> ABOUT.</p>
                </div>
                <AboutContainer>
                    <Row>
                        <Col sm={8}>
                            <StyledText>
                                <p>Hey! I'm JunBeom, a junior software engineer based in Vancouver, Canada. </p>
                                <p>
                                    Mind what no by kept. Celebrated no he decisively thoroughly.
                                    Our asked sex point her she seems. New plenty she horses parish design you.
                                    Mind what no by kept. Celebrated no he decisively thoroughly.
                                    </p>

                                <p>
                                    Mind what no by kept. Celebrated no he decisively thoroughly.
                                    Our asked sex point her she seems. New plenty she horses parish design you.
                                    </p>

                                <p>Here are a few technologies I've been working with recently:</p>

                                <ul className="skills-list">
                                    {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                                </ul>
                            </StyledText>
                        </Col>
                        <Col sm={4}>
                            <>
                                <ImageWrapper>
                                    <img
                                        id="profile-pic"
                                        src={profileImage}
                                        alt="profile image"
                                    ></img>
                                </ImageWrapper>
                                <ButtonWrapper>
                                    <button> RESUME </button>
                                </ButtonWrapper>
                            </>

                        </Col>
                    </Row>
                </AboutContainer>
            </ContentWrapper>
        </section >
    );
}

export default About;