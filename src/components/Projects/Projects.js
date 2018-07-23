import React from "react";
import "./Projects.css";
import Odin from "../Odin";

const Projects = () => (

    <div className="projectsbg">
        <div className="col-md-12">
           <Odin />
            <div>
                <h1>ShareBNB</h1>
                <a href="https://github.com/Mosjoandy/ShareBnb"><img width="100rem" src="https://news.bitcoin.com/wp-content/uploads/2018/06/880593_media_512x512-300x300.png" alt="github icon" /></a>
                <a href="https://mysterious-cliffs-66031.herokuapp.com/"><img width="100rem" src="https://railsware.com/blog/wp-content/uploads/2017/12/Heroku-Queuing-Time.png" alt="heroku deployment" /></a>
            </div>
        </div>
    </div>
);
        
export default Projects;
