import React from 'react';
import ResumeItem from '../Components/ResumeItem';

const PAGE_NAME = "Projects"

class Projects extends React.Component {

    render() {
        return (
            <section className="projects-section" id="projects">
                <div className="resume-content">
                    <div className='resume-content-container'>
                        <h1> {PAGE_NAME} </h1>
                        <div className='resume-content-container-wrapper'  style={{backgroundColor: "white", padding: "1rem"}}>
                            <ul className='resume-items'>
                                <ResumeItem
                                    src='https://picsum.photos/200/300'
                                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                    label='Adventure'
                                    path='/services'
                                />
                            </ul>
                            <ul className='resume-items'>
                                <ResumeItem
                                    src='https://picsum.photos/200/300'
                                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                    label='Adventure'
                                    path='/services'
                                />
                            </ul>
                            <ul className='resume-items'>
                                <ResumeItem
                                    src='https://picsum.photos/200/300'
                                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                    label='Adventure'
                                    path='/services'
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;