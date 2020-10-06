import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const ResumeItemDiv = styled.div`
    border-radius: 10px;
    // background-color: rgba(255, 255, 255, 0.7);
    // box-shadow: inset 0 2px 2px rgba(0,0,0,0.16), 0 2px 2px rgba(0,0,0,0.45);
    padding: 2rem;
    margin-bottom: 2rem;
    max-width: 50rem;
    @media screen and (max-width: 991px) {
            width: 100%;
            border-radius: 10px;
            padding: 1.1rem;
    }
    @media screen and (max-width: 480px) {
            width: 20rem;
            border-radius: 10px;
            padding: 1rem;
    }
`;

const ResumeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 480px) {
        .resume-item-header-company {
            max-width: 10rem;
            padding-right: 0.2rem;
        }
    }
    .resume-item-header-date {
        display: grid	;
    }
`;

const ResumeSubHeader = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    h5{
    }
`;

const ResumeDetails = styled.ul`
    list-style: square;
    padding-left: 3%;
`;

const StyledText = styled.div`
  ul.content-list {
    display: inline;
    padding: 0;
    list-style: none;
    li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #DBA111;
        }
      }
      
  }
`;

const AboutContainer = styled.div`

}

`;

function ResumeItem(props) {
    const lines = [
        " Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited.",
        " Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited.",
        " Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited.",
    ]
    return (
        <ResumeItemDiv>
            <Container>
                <AboutContainer>
                    <Row>
                        <Col sm={8}>
                            <h3 className="resume-item-header-company"> WORD OF NEW LIFE BOOKS </h3>

                        </Col>
                        <Col sm={4}>
                            <h6 > <span className="resume-item-header-date"> DEC. 2020 - </span> <span className="resume-item-header-date">  DEC. 2020 </span> </h6>

                        </Col>
                    </Row>
                </AboutContainer>

                <ResumeSubHeader> <h5> Software Developer Co-op </h5> </ResumeSubHeader>

                <StyledText>

                    <ul className="content-list">
                        {lines && lines.map((line, i) => <li key={i}> <span> {line} </span></li>)}
                    </ul>

                </StyledText>
            </Container>
        </ResumeItemDiv>
    );
}

export default ResumeItem;