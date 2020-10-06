import React from 'react';
import styled from 'styled-components';
import ResumeItem from '../Components/ResumeItem';



const ContentWrapper = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
    .resume-content-title {
        margin-top: 3rem;
        margin-bottom: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const PAGE_NAME = "04. EDUCATION."

const Education = () => {

    return (
        <section id="education">
            <ContentWrapper>
                <div className="resume-content-title">
                    <span className="header-number" style={{ color: "#DBA111", fontSize: "25px", verticalAlign: "bottom", verticalAlign: "top" }}> 04. &nbsp;&nbsp;</span>
                    <span className="header" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "33px", verticalAlign: "top" }}> EDUCATION.</span>
                </div>
                <div className="resume-items">
                    <ResumeItem />
                    <ResumeItem />
                </div>
            </ContentWrapper>
        </section>

    );
}

export default Education;