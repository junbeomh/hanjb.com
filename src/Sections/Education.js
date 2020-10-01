import React from 'react';
import ResumeItem from '../Components/ResumeItem';

const PAGE_NAME = "EDUCATION"
class Education extends React.Component {

    render() {
        return (
            <section id="education">
                <div className="resume-content">
                    <div className='resume-content-container'>
                        <h1 className="resume-content-title"> {PAGE_NAME} </h1>
                        <div className="resume-items">
                            <ResumeItem
                                src='https://picsum.photos/200/300'
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path='/services'
                            />
                            <ResumeItem
                                src='https://picsum.photos/200/300'
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path='/services'
                            />
                            <ResumeItem
                                src='https://picsum.photos/200/300'
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path='/services'
                            />
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Education;