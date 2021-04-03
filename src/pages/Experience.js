import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../styles/App.css";
import * as Constants from '../constants/strings';
import ContentHeader from '../components/ContentHeader';


const ContentWrapper = styled.div`
    font-weight: 600;
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
                <ContentHeader contentIndex={Constants.EXPERIENCE.INDEX} title={Constants.EXPERIENCE.TITLE} />
                <TimeLineContainer>
                    <div className="resume-item-timeline">
                        <VerticalTimeline>
                            {
                                experiences && experiences.map((experience, index) => {
                                    return (
                                        <VerticalTimelineElement
                                            key={index}
                                            className="custom-vertical-timeline-element-date"
                                            contentStyle={{ background: 'rgba(255,255,255,1)', }}
                                            contentArrowStyle={{ borderRight: "none" }}
                                            date={experience.date}
                                            dateClassName="vertical-timeline-element-date"
                                            iconClassName="vertical-timeline-element-icon"
                                        >
                                            <h3 className="vertical-timeline-element-title ">{experience.name}</h3>
                                            <h5 className="vertical-timeline-element-subtitle">{experience.position}</h5>
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