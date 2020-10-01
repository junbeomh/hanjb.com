import React from 'react';
import Container from 'react-bootstrap/Container';

function ResumeItem(props) {
    return (
        <div className="resume-item-wrapper">
            <Container className="resume-item">
                <div className="resume-item-header">
                    <h3 > PICCOLO SOFTWARE INC. </h3>
                    <h6 > <span className="resume-item-header-date"> DEC. 2020 - </span> <span className="resume-item-header-date">  DEC. 2020 </span> </h6>
                </div>

                <div className="resume-item-sub-header"> <h5> Software Developer Co-op </h5> </div>

                <div>
                    <ul className="resume-item-details">
                        <li>
                            <span>
                                Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited.
                            </span>
                        </li>
                        <li>
                            <span>
                                Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am.
                            </span>
                        </li>
                        <li>
                            <span>
                                Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.
                            </span>
                        </li>

                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default ResumeItem;