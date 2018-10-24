import React from "react";
import "./Hotmess.css";
// import { Container, Row, Col, Section } from "../../components/Grid";
import Fade from "react-reveal/Fade";
// import Projects from "../Projects";

class Hotmess extends React.Component {

    render() {

        return (
            <div className="card  mt-4">
                <div id="hotmessBG"></div>
                <div  className="card-body">
                    <Fade top>
                        <h1 id="hotmessTitle" className="text-center">Auntie Hotmess Soaps</h1>
                        <hr />
                    </Fade>
                    <div className="card-body hotmessBody">

                        <Fade cascade top duration={1200}>
                            <div id="cardInfo">
                                <p>
                                    Auntie Hotmess is a single page React Application providing information on products,
                                    and events.
                                </p>
                                <p>
                                    Face-to-face customer satisfaction from conceptualization to deployment, with weekly updates
                                    provided. Google Domains and Github used for web hosting solutions. Basic SEO implementation 
                                    included.
                                </p>
                                <p>
                                    Visitors of the site can read about the beginnings and mission of Auntie Hotmess Soaps, as 
                                    well as information on products, future events, co-ops, and social media.
                                </p>
                                <h4 id="hotmessTitle"><u>Role:</u></h4>
                                <p>Front-End Developer</p>
                                <h4 id="hotmessTitle"><u>Timeframe:</u></h4>
                                <p>August 5 - September 9, 2018</p>
                                <h4 id="hotmessTitle"><u>Technology:</u></h4>
                                <p>
                                <img className="skillSetImg" src={require("../../components/images/reactjs.svg")} alt="reactlogo" />React.js,&nbsp;
                                    <img className="skillSetImg" src={require("../../components/images/html5.png")} alt="html5logo" />HTML5,&nbsp;
                                    <img className="skillSetImg" src={require("../../components/images/css3.png")} alt="css3logo" />CSS3,&nbsp;
                                    <img className="skillSetImg" src={require("../../components/images/bootstrap.png")} alt="bootstraplogo" />Bootstrap
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="card-body bottomsUp">
                        <h1 className="text-center">
                            <Fade top delay={1000}>
                                <a href="https://www.auntiehotmess.com" target="_blank" rel="noopener noreferrer"><img src={require("../../components/images/hotmessBtn.png")} alt="hotmess button" id="hotmessBtn"/></a>
                                <a href="https://github.com/Mosjoandy/auntiehotmess" target="_blank" rel="noopener noreferrer"><img id="linksIcon" src={require("../../components/images/git.png")} alt="github icon" /></a>
                            </Fade>
                        </h1>
                    </div>
                </div>
            </div>
        )
    };
}
export default Hotmess;
