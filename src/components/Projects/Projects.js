import React from "react";
import "./Projects.css";
import Odin from "../Odin";
import Share from "../Share";
import Fade from "react-reveal/Fade";
import { Container, Section } from "../../components/Grid";

const Projects = () => (

    <Section>
        <Container>
            <Fade>
                <Odin />
            </Fade>
            {/* <Fade top collapse>
            <Share />
        </Fade> */}
        </Container>
    </Section>
);

export default Projects;
