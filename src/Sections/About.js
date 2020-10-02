import React from 'react';
import ResumeItem from '../Components/ResumeItem';
import ScrollAnimation from 'react-animate-on-scroll';
import profileImage from '../assets/img/profile.jpg';

const PAGE_NAME = "ABOUT"

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
                        {/* <ScrollAnimation animateIn='animate__fadeInUp'
                            animateOut=''>
                        </ScrollAnimation> */}
                        <div className="flex-wrapper">
                            <div className="flex-container">

                                <div className="flex-child-wrapper-small">
                                    <img
                                        src={profileImage}
                                        alt="profile image"
                                        height="250"
                                    >
                                    </img>
                                </div>

                                <div className="flex-child-wrapper-big">
                                    <div>
                                        <h3>
                                            JunBeom - A Junior Software
                                            Engineer from Vancouver.
                                    </h3>

                                        <div>
                                        Mind what no by kept. Celebrated no he decisively thoroughly. Our asked sex point her she seems. New plenty she horses parish design you.
                                    </div>

                                        <br></br>

                                        <div>
                                        Mind what no by kept. Celebrated no he decisively thoroughly. Our asked sex point her she seems. New plenty she horses parish design you.
                                    </div>

                                        <br></br>

                                        <span> junbeomh94@gmail.com </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;