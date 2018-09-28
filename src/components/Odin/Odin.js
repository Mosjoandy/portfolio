import React from "react";
import "./Odin.css";
import { Container, Row, Col, Section } from "../Grid";
import Fade from "react-reveal";

const Odin = () => (

    <Section id="odinProject">
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Fade right>
                        <div id="projectCard" className="card">
                            <div className="card-body">
                                <h1 className="text-center">Odin's Ravens</h1>
                                <div className="card-body">
                                    <p>
                                        Odin's Ravens is a digitized version of the card game from Osprey Games.
                                        In 2016, it was the winner of Games Expo Best Strategic Card and Dice Game.
                                    </p>
                                    <p>
                                        Our development team has converted all the card graphics into digital form
                                        to produce an online player versus player game.
                                    </p>
                                    <p>
                                        With working lobby chat and multiple game lobbies, players can play our
                                        version of Odin's Ravens online for free.
                                    </p>
                                </div>
                                <div className="card-body">
                                    <p> Built with:&nbsp;
                                        <img className="skillSetImg" src={require("../images/reactjs.svg")} alt="reactlogo" />React.js,&nbsp;
                                        <img className="skillSetImg" src={require("../images/firebase.png")} alt="firebaselogo" />Google Firebase,&nbsp;
                                        <img className="skillSetImg" src={require("../images/html5.png")} alt="html5logo" />HTML5,&nbsp;
                                        <img className="skillSetImg" src={require("../images/css3.png")} alt="css3logo" />CSS3,&nbsp;
                                        <img className="skillSetImg" src={require("../images/bootstrap.png")} alt="bootstraplogo" />Bootstrap.
                                    </p>
                                </div>
                                <div className="card-body">
                                    <h1 className="text-right">
                                        <div id="linksUpTop">
                                            <a href="https://github.com/Mosjoandy/OdinsWorld"><img id="linksIcon" src={require("../images/github.png")} alt="github icon" /></a>
                                            <a href="https://odins-ravens.herokuapp.com/"><img id="linksIcon" src={require("../images/coin-1.png")} alt="odin coin" /></a>
                                        </div>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Col>

                <Col size="md-6">
                    <Fade left>
                        <div id="projectCard" className="card">
                            <div className="card-body">
                                <img className="lokiPic" src={require("../images/loki.png")} alt="loki" />
                                {/* <img className="cardPic" src={require("../images/cards.png")} alt="cards" /> */}
                                <img className="cardPic2" src={require("../images/cards2.png")} alt="cards2" />
                            </div>
                        </div>
                    </Fade>
                </Col>
            </Row>
        </Container>
    </Section>
);

export default Odin;
