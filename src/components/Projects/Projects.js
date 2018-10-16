import React from "react";
import "./Projects.css";
import Odin from "../Odin";
import Share from "../Share";
import Fade from "react-reveal";

const Projects = () => (

    <div>
        <Fade duration={2000}>
            <Odin />
        </Fade>
        {/* <Fade top collapse>
            <Share />
        </Fade> */}
    </div>
);

export default Projects;
