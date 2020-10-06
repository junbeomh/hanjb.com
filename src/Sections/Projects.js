import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`

.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;
    padding: 2rem;
  
  @media (min-width: 600px) {
     grid-template-columns: repeat(2, 1fr);
  }
}
`;

const CardContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    color: white;
    height: 20rem;
    
    .image-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }
    
    .image{
        width: 100%;
        height: 100%;
    }

    .image-description {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0, 0.5);
        color: #fff;
        visibility: hidden;
        opacity: 0;
        transition: opacity .2s, visibility .2s;
        padding: 35px;
        line-height: 5px;
    }

    .image-wrapper:hover .image-description {
        visibility: visible;
        opacity: 1;
    }
    
}
`;

const PAGE_NAME = "02 PROJECTS."

const Projects = () => {
    const items = ['JOHN HAN', 'ASDASDASD', 'ASDASDASD', 'ASDASDASD',];
    return (
        <section id="projects">
            <div className="resume-content-title" style={{marginTop: "4rem", marginBottom: "4rem"}}>
                <span className="header-number" style={{ color: "#DBA111", fontSize: "25px", verticalAlign: "bottom", verticalAlign: "top" }}> 02. &nbsp;&nbsp;</span>
                <span className="header" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "33px", verticalAlign: "top" }}> PROJECTS.</span>
            </div>
            <ProjectContainer className="cards">
                <div className="cards">
                    {items.map((item, i) => (
                        <div key={i}>
                            <CardContainer>
                                <div class="image-wrapper">
                                    <img class="image" src="https://picsum.photos/200/300"/>
                                    <div class="image-description">
                                        <p>
                                            {item}
                                        </p>
                                        <h3>
                                            A simple description.
                                        </h3>
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

