import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResumeItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Container style={{marginLeft: "5em"}}>
                    <Row>
                        <Col sm={7}> <p> PICCOLO SOFTWARE INC. </p></Col>
                        <Col sm={3}> <p style={{display: "relative", float: "right"}}> DEC. 2020 - DEC. 2020</p></Col>
                    </Row>
                    <Row>
                        <Col  sm={3}> Software Developer Co-op </Col>
                    </Row>
                    <Row>
                        <Col sm={10}> <p> sdasdasdaasd asd jalksd lka dlkajslkd alksd sdasdasdaasd asd jalksd lka dlkajslkd alksdsdasdasdaasd asd jalksd lka dlkajslkd alksdsdasdasdaasd asd jalksd lka dlkajslkd alksd</p></Col>
                    </Row>
                </Container>
            </li>
        </>
    );
}

export default ResumeItem;