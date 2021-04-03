import React, { useState } from 'react';
import styled from 'styled-components';
import "../styles/App.css";
import FootyRoom from '../constants/img/footyroom-screenshot3.png';
import BCITSAVOTES from '../constants/img/bcitsavotes-screenshot1.png';
import LoveYourPlanet from '../constants/img/loveyourplanet.png';
import * as Constants from '../constants/strings';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel, } from 'react-bootstrap';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

Modal.defaultStyles.overlay.backgroundColor = 'none';


const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '800px',
        minWidth: '500px',
        height: '65%',
        borderRadius: '10',
        margin: '0',
        padding: '0',

    }
};

const ProjectCardContainer = styled.div`
    background-color: #D1D1D1;
    color: white;
    height: 25rem;

    a {
        .social-icons {
          width: 28px;
          height: 28px;
          transition: all 0s linear;
          margin-right: 15px;
          color: black;
          &:hover,
          &:focus {
            transform: translateY(-3px);
            color: ${props => props.theme.accentColor};
            ;
          }
        }
      }
    
    .project-wrapper {
        display: flex;
        height: 100%;
        width: 100%;
        margin: auto;
        align-items: center;
        justify-content: center;
    }
    
    .image {
        width: 100%;
        height: 100%;
    }

    .project-wrapper:hover .project-info-container {
        visibility: visible;
        color: black;
        opacity: 1;
        // background-color: ${props => props.theme.accentColorLight};
        border: 2px solid ${props => props.theme.accentColor};

    }

    .project-info-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255,255,255, 0.6);
        color: #fff;
        visibility: hidden;
        opacity: 0;
        transition: opacity .2s, visibility .2s;
        padding: 35px;

        .project-info {
            position: relative;
            display: flex;
            flex-direction: column;
        }
    
        .project-company {
            font-size: var(--fz-m);
        }
    
        .project-name {
            font-size: var(--fz-xxl);
            font-weight: 800;
        }

        .project-techstack {
            font-weight: 300;
            font-size: var(--fz-sm);
        }

        @media (max-width: 580px) {
            font-size: var(--fz-sm);
          }
        }
        
        .project-descriptShort {
            margin-top: 20px;
            font-weight: 600;
            font-size: var(--fz-md);
        }

        .modal-project-redirect {
            margin-top:30px;
            display: flex;
        }
    
    }
    

    &:hover,
    &:focus {
      transform: translateY(-5px);
    }

    @media (max-width: 1002px) {
        height: 23rem;
        .image {
            width: 100%;
            height: 100%;
        }
      }
    @media (max-width: 480px) {
        height: 21rem;
        .image {
            width: 100%;
            height: 100%;
        }
      }
    }

    

`;

const ModalContainer = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    color: black;

    overflow-y: auto;

    a {
        .social-icons {
          width: 28px;
          height: 28px;
          transition: all 0s linear;
          color: black;
          &:hover,
          &:focus {
            transform: translateY(-3px);
            color: ${props => props.theme.accentColor};
            ;
          }
        }
      }

    .cancelIcon {
        z-index:1;
        cursor: pointer;
        color: black;
        font-weight: bold;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 5px;
        margin-right: 10px;
      }

    .modal-image-wrapper {
        white-space: nowrap;   
        text-align: center; margin: 1em 0;
        background-color: #D1D1D1;
        width: 100%;
        height: 550px;
        margin: auto;
        align-items: center;
    }

    .carousel {
        margin: 0 auto;
        background-size: cover
        display:block;
        height: auto; 
        max-width: 100%;
    }

    .carousel-item {
        width: 500px;
        height: 550px;
        background-color: #D1D1D1;
        
    }

    .carousel-item-image {
        padding: 30px;
        width: 60%;
        height: 90%;
        
    }

    .helper {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
    
    .image {
        vertical-align: middle;
        height: 85%;
        width: 55%;
    }

    .modal-project {
        padding: 30px 60px;
        .modal-project-header{
            display: flex;
            flex-direction: row;
            width: 100%;
            // border: 1px solid black;
            flex: 1;
            justify-content: space-between;
        }

        .modal-project-info {
            display: flex;
            flex-direction: column;
            width: 95%;
        }
        
        .modal-project-redirect {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: space-around;
        }

        .modal-project-company {
            font-size: var(--fz-m);
            font-weight: 500;

        }
    
        .modal-project-name{
            font-size: var(--fz-xxl);
            font-weight: 700;
        }

        .modal-project-description {
            margin-top: 20px;
            word-wrap: break-word;
            font-weight: 400;

        }
    }
    @media (max-width: 1575px) {
        .modal-project {
            padding: 15px 30px;
        }
        .image {
            width: 55%;
            height: 75%;
        }
      }

    @media (max-width: 1100px) {
        .modal-project {
            padding: 15px 30px;
        }
        .image {
            width: 55%;
            height: 55%;
        }
      }
    @media (max-width: 480px) {
        .modal-project {
            padding: 15px 30px;
        }
        .image {
            width: 55%;
            height: 55%;
        }
      }
    }
`;

const ProjectItem = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // subtitle.style.color = 'purple';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <ProjectCardContainer>
                <div className="project-wrapper">
                    <img className="image" src={props.item.img} alt=''/>
                    <div className="project-info-container">
                        <div className="project-info">
                            <span className="project-company">  {props.item.appCompany}  </span>
                            <span className="project-name">  {props.item.appName}   </span>
                            <span className="project-techstack"> {props.item.techStack}  </span>
                            <span className="project-descriptShort"> {props.item.appDescripShort} </span>
                            <div className="modal-project-redirect">
                                {props.item.links && props.item.links.map((link, index) => {
                                    switch (link.type) {
                                        case "github":
                                            console.log(link.type)
                                            return (
                                                <a key={index} href={link.url}>
                                                    <i className="social-icons fab fa-github"></i>
                                                </a>
                                            )
                                        case 'appstore':
                                            return (
                                                <a key={index} href={link.url}>
                                                    <i className="social-icons fab fa-app-store"></i>
                                                </a>
                                            )
                                        case 'browser':
                                            return (
                                                <a key={index} href={link.url}>
                                                    <i className="social-icons fas fa-globe"></i>
                                                </a>
                                            )
                                        default:
                                            return null;
                                    }
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </ProjectCardContainer>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={modalStyle}
                    contentLabel="Project"
                    ariaHideApp={false}
                >
                    <ModalContainer >
                        <div className="cancelIcon" onClick={closeModal}>
                            <FontAwesomeIcon icon="times" size='1x' />
                        </div>
                        <div className="modal-image-wrapper">
                            <span className="helper"></span>
                            <img className="image" src={props.item.img} />
                            {/* <Carousel className="carousel" style={{width: "100%"}}>
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block w-100 carousel-item-image mx-auto"
                                    src={props.item.img}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                    className="d-block w-100 carousel-item-image mx-auto"
                                    src={props.item.img}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-item-image mx-auto" 
                                    src={props.item.img}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel> */}
                        </div>
                        <div className="modal-project">
                            <div className="modal-project-header" >
                                <div className="modal-project-info">
                                    <span className="modal-project-company">  {props.item.appCompany}  </span>
                                    <span className="modal-project-name">  {props.item.appName}   </span>
                                </div>
                                <div></div>
                                <div className="modal-project-redirect">
                                    <a href={Constants.SOCIAL_NETWORKS.GITHUB}>
                                        <i className="social-icons fas fa-globe"></i>
                                    </a>
                                    <a href={Constants.SOCIAL_NETWORKS.LINKEDIN}>
                                        <i className="social-icons fab fa-github"></i>
                                    </a>
                                    <a href={Constants.SOCIAL_NETWORKS.LINKEDIN}>
                                        <i className="social-icons fab fa-app-store"></i>
                                    </a>
                                </div>
                            </div>
                            <h5 className="modal-project-description">  {props.item.appDescrip} </h5>
                        </div>
                    </ModalContainer>
                </Modal>
            </div>
        </div>
    );
}

export default ProjectItem;

