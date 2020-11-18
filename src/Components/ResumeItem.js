import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ResumeItemDiv = styled.div`
    padding: 2rem;
    max-width: 50rem;
    @media screen and (max-width: 991px) {
            width: 100%;
            padding: 1.1rem;
    }

    @media screen and (max-width: 480px) {
            width: 20rem;
            padding: 1rem;
    }

    // @media screen and (max-width: 768px){
    //     .resume-item-header-date {
    //         size: 10px;
    //     }
    // }
    // @media screen and (max-width: 480px){
    //     .resume-item-header-date {
    //         size: 10px;
    //     }
    // }
`;
const ResumeSubHeader = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    @media screen and (max-width: 768px){
        padding: 0rem;
    }
    @media screen and (max-width: 480px){
        padding: 0rem;
    }
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

function ResumeItem(props) {
    return (
        <ResumeItemDiv>
            <Container>
                <Row>
                    <Col sm={8}>
                        <h3 className="resume-item-header-company text-emphasis"> {props.place} </h3>
                    </Col>
                    <Col sm={4}>
                        <p className="resume-item-header-date"> {props.date} </p>
                    </Col>
                </Row>

                <ResumeSubHeader> <h5> {props.major} </h5> </ResumeSubHeader>

                <StyledText>
                    <ul className="content-list">
                        {props.desription && props.desription.map((line, i) => <li key={i}> <span> {line} </span></li>)}
                    </ul>
                </StyledText>
            </Container>
        </ResumeItemDiv>
    );
}

ResumeItem.propTypes = {
    place: PropTypes.string,
    date: PropTypes.string,
    major: PropTypes.string,
    desription: PropTypes.array,
  };

export default ResumeItem;