import React from 'react';
import ResumeItem from '../Components/ResumeItem';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const PAGE_NAME = "EDUCATION"
class Education extends React.Component {

    render() {
        return (
            <section id="education">
                <div className="resume-content">
                    <div className='resume-content-container'>
                        <h1 className="resume-content-title"> {PAGE_NAME} </h1>
                        <div className="resume-items">
                            <ScrollAnimation animateIn='animate__fadeInUp'
                                animateOut='animate__fadeInUp'>
                                <ResumeItem></ResumeItem>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='animate__fadeInUp'
                                animateOut='animate__fadeInUp'>
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