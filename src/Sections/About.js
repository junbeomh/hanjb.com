import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profileImage from '../img/profile.jpg';
import { Row, Col } from 'react-bootstrap';
const PAGE_NAME = "01. ABOUT."

const ContentWrapper = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
    .resume-content-title {
        margin-top: 2rem;
        margin-bottom: 2rem;
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
    // background-color:rgba(0,0,0, 0.5);
        
    #profile-pic {
        width: 100%;
        height: auto;
        border-radius: 3px;
        
        @media screen and (max-width: 600px){    
            width: 70%;
            height: 60%;
        }
        @media screen and (max-width: 480px){    
            width: 70%;
            height: 60%;
        }
        &:hover,
        &:focus{
            opacity: 0.6;
        }
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
    a {
        letter-spacing: 0.1em;
        text-decoration: none;
        &:hover,
        &:focus {
          color: var(--color-yellow);
        }
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
    }, []);
    const skills = ['AWS', 'React', 'Python', 'Node & Express JS', 'MongoDB', 'Docker',];
    return (
        <section id="about">
            <ContentWrapper>
                <div className="resume-content-title" style={{}}>
                    <p className="header-number" style={{ color: "#DBA111", fontSize: "25px", verticalAlign: "top" }}> 01. &nbsp;</p>
                    <p className="header" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "33px", lineHeight: "10px", position: "relative", }}> ABOUT ME.</p>
                </div>
                <AboutContainer>
                    <Row>
                        <Col sm={8}>
                            <StyledText>
                                <p>Hey! I'm JunBeom, a junior software engineer based in Vancouver, Canada. </p>
                                <p>
                                    Shortly after graduating from UBC, I have decided to make a career switch to Computer Science - and I have loving it since!
                                </p>

                                <p>
                                    I am devoted to continuous learning, as there are always new perspectives unseen. Also, 
                                    I love having structure and keeping things in order, with a mindset of continuosuly improving and optimizing them. 
                                    Lastly, I enjoy and value team work because accomplishing collective goals as a group is always thrilling.
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
                                    <button><a href="/resume.pdf" className="resume-button"> RESUME </a> </button>
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