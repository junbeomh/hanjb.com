import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as Constants from '../Constants/strings';


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


const Experience = () => {

    const experiences = Constants.EXPERIENCE.EXPERIENCES;

    return (
        <section id="experience">
            <ContentWrapper>
                <div className="resume-content-title">
                    <span className="header-number" style={{ color: "#DBA111", fontSize: "25px", verticalAlign: "bottom", verticalAlign: "top", marginRight: '10px' }}> {Constants.EXPERIENCE.INDEX} </span>
                    <span className="header" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "35px", verticalAlign: "top" }}>{Constants.EXPERIENCE.TITLE} </span>
                </div>
                <TimeLineContainer >
                    <div className="resume-item-timeline">
                        <VerticalTimeline>
                            {
                                experiences && experiences.map((experience) => {
                                    return (
                                        <VerticalTimelineElement
                                            contentStyle={{ background: 'rgba(255,255,255,0.8)' }}
                                            className="vertical-timeline-element--work"
                                            date={experience.date}
                                            dateClassName="vertical-timeline-element-date"
                                            iconClassName="vertical-timeline-element-icon"
                                        >
                                            <h3 className="vertical-timeline-element-title ">{experience.name}</h3>
                                            <h4 className="vertical-timeline-element-subtitle">{experience.position}</h4>
                                            <p className="vertical-timeline-element-description">  {experience.details} </p>
                                        </VerticalTimelineElement>
                                    )

                                })
                            }

                        </VerticalTimeline>
                    </div>
                </TimeLineContainer>
            </ContentWrapper>

        </section >
    );
}

export default Experience;