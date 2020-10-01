import React from 'react';
import ResumeItem from '../Components/ResumeItem';

const PAGE_NAME = "ABOUT"

class About extends React.Component {

    render() {
        return (
            <section id="about">
                <div className="resume-content">
                    <div className='resume-content-container'>
                    <h1 className="resume-content-title"> {PAGE_NAME} </h1>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;