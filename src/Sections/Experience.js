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
                    <span className="header-number" style={{ color: "#DBA111", fontSize: "25px", verticalAlign: "bottom", verticalAlign: "top" }}> 03. &nbsp;&nbsp;</span>
                    <span className="header" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "35px", verticalAlign: "top" }}> EXPERIENCE.</span>
                </div>
                    <TimeLineContainer >
                        <div className="resume-item-timeline">

                            <VerticalTimeline>
                                <VerticalTimelineElement
                                    position="left"
                                    className="vertical-timeline-element--work"
                                    date="2011 - present"
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                    <p>  Creative Direction, User Experience, Visual Design, Project Management, Team Leading  </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2010 - 2011"
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                    <p> Creative Direction, User Experience, Visual Design, SEO, Online Marketing  </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    position="left"

                                    className="vertical-timeline-element--work"
                                    date="2008 - 2010"
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                >
                                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                                    <p>  User Experience, Visual Design   </p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </div>
                    </TimeLineContainer>
            </ContentWrapper>

        </section >
    );
}

export default Experience;