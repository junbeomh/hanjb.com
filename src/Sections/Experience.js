import React from 'react';
import ResumeItem from '../Components/ResumeItem';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const PAGE_NAME = "EXPERIENCE";

class Experience extends React.Component {

    render() {
        return (
            <section id="experience">
                <div className="resume-content">
                    <h1 className="resume-content-title"> {PAGE_NAME} </h1>
                    <div className='resume-timeline-container'>
                        <div className="resume-item-timeline">
                            <ScrollAnimation
                                animateIn='fadeIn'
                                animateOut='fadeOut'>
                                <VerticalTimeline>
                                    <VerticalTimelineElement
                                        position="left"
                                        className="vertical-timeline-element--work"
                                        date="2011 - present"
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    >
                                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                        <p>  Creative Direction, User Experience, Visual Design, Project Management, Team Leading  </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="2010 - 2011"
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
                            </ScrollAnimation>

                        </div>
                    </div>
                </div>

            </section>);
    }
}

export default Experience;