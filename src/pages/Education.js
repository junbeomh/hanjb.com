import React from 'react';
import styled from 'styled-components';
import ResumeItem from '../components/ResumeItem';
import * as Constants from '../constants/strings';
import ContentHeader from '../components/ContentHeader';

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
                <ContentHeader contentIndex={Constants.EDUCATION.INDEX} title={Constants.EDUCATION.TITLE} />

                <div className="resume-items">
                    {
                        educations && educations.map((education, index) => {
                            return (
                                <ResumeItem
                                    key={index}
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