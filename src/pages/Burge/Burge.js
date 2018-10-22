import React from "react";
import "./Burge.css";
// import { Container, Row, Col, Section } from "../../components/Grid";
import Fade from "react-reveal/Fade";
// import Projects from "../Projects";

class Burge extends React.Component {

    render() {

        return (
            <div className="card  mt-4">
                <div id="burgeBG"></div>
                <div  className="card-body">
                    <Fade top>
                        <h1 id="burgeTitle" className="text-center">Burge Road Farm</h1>
                        <hr />
                    </Fade>
                    <div className="card-body burgeBody">

                        <Fade cascade top duration={1200}>
                            <div>
                                <p>
                                   The Burge Road Farm is a multi-page react website connected to a Google Firebase database that 
                                   includes an admin panel for mass email purposes. Authentication utilizes Google Firebase Auth.
                                </p>
                                <p>
                                    Concurrent development with Auntie Hotmess as both small businesses are part of the same Co-Op. 
                                    The owner reached out privately after viewing the publication of my other work.
                                </p>
                                <p>
                                    Website viewers can navigate the entire website be notified when the season for U-Pick Cherries 
                                    is coming up. Included is a control panel that the owner can remove and copy email addresses to 
                                    conduct mass emailing.
                                </p>
                                <h4 id="burgeTitle"><u>Role:</u></h4>
                                <p>Full-Stack Developer</p>
                                <h4 id="burgeTitle"><u>Timeframe:</u></h4>
                                <p>September 19, 2018 - Present</p>
                                <h4 id="burgeTitle"><u>Technology:</u></h4>
                                <p>
                                    <img className="skillSetImg" src={require("../../components/images/reactjs.svg")} alt="reactlogo" />React.js,&nbsp;
                                    <img className="skillSetImg" src={require("../../components/images/firebase.png")} alt="firebaselogo" />Google Firebase,&nbsp;
                                    <img className="skillSetImg" src={require("../../components/images/html5.png")} alt="html5logo" />HTML5,&nbsp;
                                    <img className="skillSetImg" src={require("../../components/images/css3.png")} alt="css3logo" />CSS3,&nbsp;
                                    <img className="skillSetImg" src={require("../../components/images/bootstrap.png")} alt="bootstraplogo" />Bootstrap
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="card-body">
                        <h1 className="text-center">
                            <Fade top delay={1000}>
                                <a href="https://brfsite-fabb7.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><button className="btn burgeButton">Live Website</button></a>
                                <a href="https://github.com/Mosjoandy/burgeroadfarm" target="_blank" rel="noopener noreferrer"><img id="linksIcon" src={require("../../components/images/github.png")} alt="github icon" /></a>
                            </Fade>
                        </h1>
                    </div>
                </div>
            </div>
        )
    };
}
export default Burge;
