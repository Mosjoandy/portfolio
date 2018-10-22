import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Projects.css";
import Odin from "../Odin";
import Share from "../Share";
import Hotmess from "../Hotmess";
import Burge from "../Burge";
import Fade from "react-reveal/Fade";
import { Container, Row, Col, Section } from "../../components/Grid";

class Projects extends Component {

    render() {
        return (
            // <nav id="projectsNav" className="navbar navbar-expand-lg navbar-light">
            //     <div className="navbar-nav mx-auto">
            //         <li className="nav-item">
            //             <Link to="/odin" id="navButtons" className={window.location.pathname === "/odin" ? "nav-link active" : "nav-link"}>
            //                 Odin
            //   </Link>
            //         </li>
            //         <li className="nav-item">
            //             <Link to="/share" id="navButtons" className={window.location.pathname === "/share" ? "nav-link active" : "nav-link"}>
            //                 Share
            //   </Link>
            //         </li>
            //     </div>
            // </nav>
            <Section id="projectScroll">
                <Container>
                    <Row>
                        <Col size="md-12">
                            <h1 className="mx-auto text-center display-4">
                                <Fade bottom>
                                    Projects
                                <Fade>
                                        <hr />
                                    </Fade>
                                </Fade>
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <div className="card-deck">
                                <Odin />
                                <Share />
                            </div>
                            <div className="card-deck">
                                <Burge />
                                <Hotmess />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
};

export default Projects;
