import React, { Component } from "react";
import "./Projects.css";
import Odin from "../Odin";
import Share from "../Share";
import Fade from "react-reveal/Fade";
import { Container, Row, Col, Section } from "../../components/Grid";

class Projects extends Component {

    render() {
        return (
            <Section>
                <Container>
                    <Fade>
                        <Odin />
                    </Fade>
                    <Fade top collapse>
                <Share />
            </Fade>
                </Container>
            </Section>
        )
    }
};

export default Projects;
