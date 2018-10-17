import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
// import Odin from "../Odin";
// import Share from "../Share";
// import Fade from "react-reveal/Fade";
// import { Container, Row, Col, Section } from "../../components/Grid";

class Projects extends Component {

    render() {
        return (
            <nav id="projectsNav" className="navbar navbar-expand-lg navbar-light">
                <div className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link to="/odin" id="navButtons" className={window.location.pathname === "/odin" ? "nav-link active" : "nav-link"}>
                            Odin
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/share" id="navButtons" className={window.location.pathname === "/share" ? "nav-link active" : "nav-link"}>
                            Share
              </Link>
                    </li>
                </div>
            </nav>
        )
    }
};

export default Projects;
