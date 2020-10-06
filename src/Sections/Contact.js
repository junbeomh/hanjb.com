import React from 'react';
import ResumeItem from '../Components/ResumeItem';

const PAGE_NAME = "CONTACT";

class Contact extends React.Component {

    render() {
        return (
            <section id="about">
                <p className="resume-content">
                    <p className='resume-content-container'>
                        <h1 className="resume-content-title"> {PAGE_NAME} </h1>
                        <ResumeItem>

                        </ResumeItem>
                    </p>
                </p>
            </section>
        );
    }
}

export default Contact;