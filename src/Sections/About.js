import React from 'react';
import ResumeItem from '../Components/ResumeItem';
import ScrollAnimation from 'react-animate-on-scroll';
import profileImage from '../assets/img/profile.jpg';
import { Container, Row, Col } from 'react-bootstrap';
const PAGE_NAME = "ABOUT"

{/* <ScrollAnimation animateIn='animate__fadeInUp'
                            animateOut=''>
                        </ScrollAnimation> */}

class About extends React.Component {
    constructor() {
        super()

        this.state = {
            offset: 0
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }
    parallaxShift = () => {
        this.setState({
            offset: window.pageYOffset
        });
    };

    render() {
        return (
            <section id="about">
                <div className="resume-content">
                    <div className='resume-content-container'>
                        <h1 className="resume-content-title"> {PAGE_NAME} </h1>
                        <Row className="about-container">
                            <Col sm={8} className="about-details">
                                <div>Hey! I'm JunBeom, a junior software engineer based in Vancouver, Canada. </div>
                                <br></br>
                                <div>
                                    Mind what no by kept. Celebrated no he decisively thoroughly.
                                    Our asked sex point her she seems. New plenty she horses parish design you.
                                    Mind what no by kept. Celebrated no he decisively thoroughly.
                                    Our asked sex point her she seems. New plenty she horses parish design you.
                                    </div>
                                <br></br>

                                <div>
                                    Mind what no by kept. Celebrated no he decisively thoroughly.
                                    Our asked sex point her she seems. New plenty she horses parish design you.
                                    </div>
                                <br></br>

                                <div>
                                    Here are a few technologies I've been working with recently:
                                    <Container style={{ padding: "1rem" }}>
                                        <Row>
                                            <Col>
                                                <div >
                                                    <ul className="resume-item-details">
                                                        <li> React JS </li>
                                                        <li>  React Js </li>
                                                        <li> React Js  </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                    <ul className="resume-item-details">
                                                        <li> React Js </li>
                                                        <li>  React Js </li>
                                                        <li> React Js  </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                            <Col sm={4} className="about-pic">
                                <img
                                    id="profile-pic"
                                    src={profileImage}
                                    alt="profile image"
                                ></img>
                            </Col>
                        </Row>

                    </div>
                </div>
            </section >
        );
    }
}

export default About;