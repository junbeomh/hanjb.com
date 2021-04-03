import React from 'react';
import styled from 'styled-components';
import profileImage from '../constants/img/profile.jpg';
import * as Constants from '../constants/strings';
import ContentHeader from '../components/ContentHeader';

const ContentWrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
    .resume-content-title {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 768px) {
        padding: 0rem;
      }
`;

const AboutContainer = styled.div`
    font-weight: 600;
    max-width: 60rem;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    overflow:hidden;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0rem;
      }

`;

const AboutText = styled.div`
    width: 100%;
    ul.skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(10px, 200px));
        padding: 0;
        margin: 10px 0 0 0;
        overflow: hidden;
        list-style: none;
        width: 100%;
        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            &:before,
            &:hover,
            &:focus{
                content: '▹';
                left: 0;
                color: ${props => props.theme.accentColor};
            }
        }
    }
    @media screen and (max-width: 480px){  
        ul.skills-list {
            width: 300px;
        }
    }
    @media screen and (max-width: 768px) {
        width: 80%;
        min-width: 250px;
      }

`;
const AboutImage = styled.div`
    padding: 20px;
    @media screen and (max-width: 488px) {
        width: 50%;
        min-width: 250px;
      }
      @media screen and (max-width: 768px) {
        width: 40%;
        min-width: 250px;
        padding: 0px;
      }
`;
const ImageWrapper = styled.div`
    position: relative;
    margin: 0 auto ;
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 70%;

    @media screen and (max-width: 480px){  
        margin: 30px 35px;
        height: 65%;
    }

    @media screen and (max-width: 768px){  
        margin: 30px 5px;
        height: 55%;
    }

    @media screen and (max-width: 600px){  
        margin: 55px;
        height: 65%;
    }

    @media screen and (max-width: 1024px){  
        margin: 20px;
        height: 60%;
    }

  img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.accentColor};
    opacity: 0;
    transition: .5s ease;
  }
  
  :hover::before {
    opacity: 0.23;
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
        border: 2px solid ${props => props.theme.accentColor};
        &:hover,
        &:focus {
          transform: translateY(-3px);
        }
    }
    a {
        font-weight: 600;
        letter-spacing: 0.1em;
        text-decoration: none;
        color:  ${props => props.theme.accentColor};
        &:hover,
        &:focus {
          color: white;
        }
    }
    @media (min-width: 768px) {
        margin: 40px auto 0;

    }
  }
`;



const About = () => {
    const skills = Constants.ABOUT.SKILLS;
    return (
        <section id="about">
            <ContentWrapper>
                <ContentHeader contentIndex={Constants.ABOUT.INDEX} title={Constants.ABOUT.TITLE} />
                <AboutContainer>
                    <AboutText>
                        <p>{Constants.ABOUT.GREETING} </p>
                        <p>{Constants.ABOUT.BACKGROUND} </p>
                        <p>{Constants.ABOUT.ABOUT_LONG} </p>
                        <p>{Constants.ABOUT.TECH_STACK} </p>
                        <ul className="skills-list">
                            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                        </ul>
                    </AboutText>
                    <AboutImage>
                        <ImageWrapper>
                            <img
                                id="profile-pic"
                                src={profileImage}
                                alt=''
                            ></img>
                        </ImageWrapper>
                        <ButtonWrapper>
                            <button><a href="/resume.pdf"> {Constants.ABOUT.RESUME} </a> </button>
                        </ButtonWrapper>
                    </AboutImage>
                </AboutContainer>
            </ContentWrapper>
        </section >
    );
}

export default About;