import React from 'react';
import styled from 'styled-components';
import FootyRoom from '../img/footyroom-screenshot3.png';
import BCITSAVOTES from '../img/bcitsavotes-screenshot1.png';
import LoveYourPlanet from '../img/loveyourplanet.png';

const ProjectContainer = styled.div`
padding: 20px;

.cards {
    max-width: 875px;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;
    padding: 1rem;
  
  @media (min-width: 600px) {
     grid-template-columns: repeat(2, 1fr);
  }
}
`;

const CardContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    color: white;
    height: 23rem;
        width: 100%;

    @media (max-width: 768px) {
        height: 23rem;

      }
      @media (max-width: 480px) {
        height: 19rem;

      }
    
    .image-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }
    
    .image{
        width: 100%;
        height: 100%;
        border-radius: 5px;

    }

    .image-description {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255,255,255, 0.6);
        color: #fff;
        visibility: hidden;
        opacity: 0;
        transition: opacity .2s, visibility .2s;
        padding: 35px;
        line-height: 5px;
        border-radius: 5px;
    }

    .image-wrapper:hover .image-description {
        
        visibility: visible;
        opacity: 1;
    }
    
}
`;

const PAGE_NAME = "02 PROJECTS."

const Projects = () => {
    const items = [
        // {
        //     appCompany: "LoveYourPlanet",
        //     appName: "LoveYourPlanet Mobile",
        //     appDescrip: "",
        //     img: LoveYourPlanet
        // },
        {
            appCompany: "Personal Project",
            appName: "FootyRoom",
            appDescrip: "",
            img: FootyRoom
        },
        {
            appCompany: "BCITSA",
            appName: "BCITSAVotes",
            appDescrip: "",
            img: BCITSAVOTES
        },
    ];
    return (
        <section id="projects">
            <div className="resume-content-title" style={{marginTop: "4rem", marginBottom: "4rem"}}>
                <span className="header-number" style={{ color: "#DBA111", fontSize: "25px", verticalAlign: "bottom", verticalAlign: "top" }}> 02.&nbsp;</span>
                <span className="header" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "33px", verticalAlign: "top" }}> PROJECTS.</span>
            </div>
            <ProjectContainer className="cards">
                <div className="cards">
                    {items.map((item, i) => (
                        <div key={i}>
                            <CardContainer>
                                <div className="image-wrapper">
                                    <img className="image" src={item.img}/>
                                    <div className="image-description">
                                        <p style={{color: "black", fontWeight: "bold"}}>
                                            {item.appCompany}
                                        </p>
                                        <h3 style={{color: "black"}}>
                                            {item.appName}
                                        </h3>
                                        <h5 style={{color: "black"}}>
                                            {item.appDescrip}
                                        </h5>
                                    </div>
                                </div>
                            </CardContainer>
                        </div>
                    ))}
                </div>
            </ProjectContainer>
        </section>
    );
}

export default Projects;

