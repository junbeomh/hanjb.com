import React from 'react';
import ResumeItem from '../Components/ResumeItem';
import ScrollAnimation from 'react-animate-on-scroll';

const PAGE_NAME = "EDUCATION"
class Education extends React.Component {

    render() {
        return (
            <section id="education">
                <div className="resume-content">
                    <div className='resume-content-container'>
                        <h1 className="resume-content-title"> {PAGE_NAME} </h1>
                        <div className="resume-items">
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut'>
                                <ResumeItem></ResumeItem>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn'
                                animateOut='fadeOut'>
                                <ResumeItem></ResumeItem>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Education;