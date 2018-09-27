import React from "react";
import "./Odin.css";
import { Container, Row, Col, Section } from "../Grid";


const Odin = () => (

    <Section id="odinProject">
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <div id="projectCard" className="card bg-none">
                        <div className="card-body">
                            <h1 className="text-center">Odin's Ravens</h1>
                            <div>
                                <a href="https://github.com/Mosjoandy/OdinsWorld"><img id="linksIcon" src={require("../images/github.png")} alt="github icon" /></a>
                                <a href="https://evening-coast-38386.herokuapp.com/"><img id="linksIcon" src={require("../images/coin-1.png")} alt="odin coin" /></a>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col size="md-6">
                    <div id="projectCard" className="card">
                        <div className="card-body">
                            <img className="lokiPic" src={require("../images/loki.png")} alt="loki" />
                            {/* <img className="cardPic" src={require("../images/cards.png")} alt="cards" /> */}
                            <img className="cardPic2" src={require("../images/cards2.png")} alt="cards2" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Section>
);

export default Odin;
