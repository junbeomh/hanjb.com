import React from 'react';
import ResumeItem from '../Components/ResumeItem';
import ScrollAnimation from 'react-animate-on-scroll';

const PAGE_NAME = "ABOUT"

class About extends React.Component {

    render() {
        return (
            <section id="about">
                <div className="resume-content">
                    <div className='resume-content-container'>
                        <h1 className="resume-content-title"> {PAGE_NAME} </h1>
                        {/* <ScrollAnimation animateIn='fadeIn'
                            animateOut='fadeOut'>
                            <ResumeItem></ResumeItem>
                        </ScrollAnimation> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default About;