import React from 'react';
import styled from 'styled-components';
import ResumeItem from '../Components/ResumeItem';
import * as Constants from '../Constants/strings';

const ContentWrapper = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
    .resume-content-title {
        margin-top: 3rem;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    // margin-bottom: 15rem;
`;

const Education = () => {
    const educations = Constants.EDUCATION.EDUCATIONS;
    return (
        <section id="education">
            <ContentWrapper>
                <div className="resume-content-title">
                    <span className="header-number" style={{ color: "#DBA111", fontSize: "25px", verticalAlign: "bottom", verticalAlign: "top", marginRight: '10px' }}> 04. &nbsp;</span>
                    <span className="header" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "33px", verticalAlign: "top" }}> EDUCATION.</span>
                </div>
                <div className="resume-items">
                    {
                        educations && educations.map((education) => {
                            return (
                                <ResumeItem
                                    place={education.name}
                                    major={education.major}
                                    date={education.date}
                                    description={null}
                                />
                            )
                        })
                    }
                </div>
            </ContentWrapper>
        </section>

    );
}

export default Education;