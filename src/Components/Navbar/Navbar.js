import React, { Component } from "react";
import '../Navbar/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" >  <span id="name"> JunBeom Han</span></a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" >
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Contact
              </a>
            </li>
            <div className="social-icons">
              <a className="social-icon" >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" >
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}
