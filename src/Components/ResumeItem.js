import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResumeItem(props) {
    return (
        <>
            <li className='resume-item'>
                <Container style={{marginLeft: "5em"}}>
                    <Row>
                        <Col sm={7}> <h3 className='company'> PICCOLO SOFTWARE INC. </h3></Col>
                        <Col sm={3}> <p className='date'> DEC. 2020 - DEC. 2020</p></Col>
                    </Row>
                    <Row>
                        <Col  sm={5} className='position'> <h5> Software Developer Co-op </h5> </Col>
                    </Row>
                    <Row>
                        <Col sm={10} className='description'> <p> sdasdasdaasd asd jalksd lka dlkajslkd alksd sdasdasdaasd asd jalksd lka dlkajslkd alksdsdasdasdaasd asd jalksd lka dlkajslkd alksdsdasdasdaasd asd jalksd lka dlkajslkd alksd</p></Col>
                    </Row>
                </Container>
            </li>
        </>
    );
}

export default ResumeItem;