import React from 'react';
import styled from 'styled-components';
import FootyRoom from '../constants/img/footyroom-screenshot3.png';
import BCITSAVOTES from '../constants/img/bcitsavotes-screenshot1.png';
import MemoryMatrix from '../constants/img/memory-game.png';
import * as Constants from '../constants/strings';
import ContentHeader from '../components/ContentHeader';
import ProjectItem from '../components/ProjectItem';

const ProjectContainer = styled.div`
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-gap: 4rem;
    padding: 1rem;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 768px) {
        grid-gap: 5rem;
        flex-direction: column;
        grid-template-columns: repeat(1, 1fr);
        padding: 2.5rem;
      }

    @media (min-width: 680px) {
        padding: 2.5rem;
    }
    @media (max-width: 580px) {
        padding: 2rem;
        grid-gap: 3rem;
      }
    }
`;

const Projects = () => {
    const items = [
        {
            appCompany: "Personal Project",
            appName: "Memory Matrix",
            img: MemoryMatrix,
            techStack: "Javascript (ES6) • Node.js • AWS",
            appDescrip: "He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. ",
            appDescripShort: "Severless browser game to challenge your memory",
            links: [{ type: "github", url: "https://github.com/junbeomh/MemoryGame-FrontEnd", }, { type: "browser", url: "http://memorygame.hanjb.com/" }]
        },
        {
            appCompany: "Personal Project",
            appName: "FootyRoom",
            img: FootyRoom,
            techStack: "React.js • Node.js • Express",
            appDescrip: "He as compliment unreserved projecting. Between had observe pretend delight for believe.",
            appDescripShort: "real-time match broadcaster for EPL",
            links: []

        },
        {
            appCompany: "BCITSA",
            appName: "BCITSAVotes",
            img: BCITSAVOTES,
            techStack: "Flutter • Firebase",
            appDescrip: "He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. ",
            appDescripShort: "Voting platform for student council meetings",
            links: [{ type: "appstore", url: "https://apps.apple.com/us/app/bcitsa-votes/id1515373111", }]
        },
    ];
    return (
        <section id="projects">
            <ContentHeader contentIndex={Constants.PROJECTS.INDEX} title={Constants.PROJECTS.TITLE} />
            <ProjectContainer>
                {items.map((item, index) => (
                    <ProjectItem
                        item={item}
                        key={index}
                    />
                ))}
            </ProjectContainer>
        </section>
    );
}

export default Projects;

