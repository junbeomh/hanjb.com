import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const ContentWrapper = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
    .resume-content-title {
        margin-top: 3rem;
        margin-bottom: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const TimeLineContainer = styled.div`
    display: relative;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
    min-width: 70%;
    margin-top: 1rem;
    @media screen and (max-width: 991px) {
        min-width: 100%;
    }
    
    @media screen and (max-width: 480px) {
    min-width: 100%;
    }
`;

const PAGE_NAME = "03. EXPERIENCE.";


const Experience = () => {

    return (
        <section id="experience">
            <ContentWrapper>
                <div className="resume-content-title">
                    <span className="header-number" style={{ color: "#DBA111", fontSize: "25px", verticalAlign: "bottom", verticalAlign: "top" }}> 03. &nbsp;</span>
                    <span className="header" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "35px", verticalAlign: "top" }}> EXPERIENCE.</span>
                </div>
                <TimeLineContainer >
                    <div className="resume-item-timeline">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                contentStyle={{ background: 'rgba(255,255,255,0.8)'}}
                                position="left"
                                className="vertical-timeline-element--work"
                                date="May 2019 - Dec 2019"
                                dateClassName="vertical-timeline-element-date"
                                iconClassName="vertical-timeline-element-icon"
                            >
                                <h3 className="vertical-timeline-element-title ">Software Dev. Co-op</h3>
                                <h4 className="vertical-timeline-element-subtitle">Piccolo Software Inc.</h4>
                                <p className="vertical-timeline-element-description">  Android, Node.js, VB.Net, Microsoft Web-services </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={{ background: 'rgba(255,255,255,0.8)' }}
                                className="vertical-timeline-element--work"
                                date="Jan 2016 - Jan 2017"
                                dateClassName="vertical-timeline-element-date"
                                iconClassName="vertical-timeline-element-icon"
                        >
                                <h3 className="vertical-timeline-element-title">Floor Manager</h3>
                                <h4 className="vertical-timeline-element-subtitle">Word of New Life Books</h4>
                                <p className="vertical-timeline-element-description"> Customer support and relations, inventory management  </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                contentStyle={{ background: 'rgba(255,255,255,0.8)' }}
                                position="left"
                                className="vertical-timeline-element--work"
                                date="May 2014 - May 2015"
                                dateClassName="vertical-timeline-element-date"
                                iconClassName="vertical-timeline-element-icon"
                            >
                                <h3 className="vertical-timeline-element-title">Sales Associate</h3>
                                <h4 className="vertical-timeline-element-subtitle">JCrew</h4>
                                <p className="vertical-timeline-element-description"> Customer service  </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </TimeLineContainer>
            </ContentWrapper>

        </section >
    );
}

export default Experience;