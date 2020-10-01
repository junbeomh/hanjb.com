import React from 'react';

const PAGE_NAME = "SKILLS";

class Skills extends React.Component {

    render() {
        return (
            <section className="skills-section" id="skills">
                <div className="resume-content">
                    <div className='resume-content-container'>
                    <h1 className="resume-content-title"> {PAGE_NAME} </h1>
                        <div className='resume-content-container-wrapper'  style={{backgroundColor: "white", padding: "1rem"}}>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;