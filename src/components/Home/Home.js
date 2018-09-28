import React from "react";
import "./Home.css";
import { Container, Row, Col, Section } from "../Grid";
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const Home = () => (

    <Section>
        <Container fluid>
            <Row>
                <Col size="md-6">
                    {/* <Fade left cascade> */}

                    {/* </Fade> */}
                </Col>

                <Col size="md-6">
                    <div id="bioCard" className="card">
                        <div className="card-body">
                            <h2>
                                <Fade down>
                                    Hi there, I'm Nick.
                                </Fade>
                            </h2>
                            <Fade down delay={500}>
                                I am a recent graduate from the UC Berkeley Coding Bootcamp.
                                    My skillset is in full-stack development, but I have a great ineterest in UX/UI and general
                                    front end web development. I am always trying to learn something new and enjoy working
                                    with others.
                                </Fade>
                            <Fade delay={1700} cascade>
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Front-End Technology</th>
                                            <th scope="col">Back-End Technology</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td><img className="skillSetImg" src={require("../images/html5.png")} alt="html5logo" />HTML5</td>
                                            <td><img className="skillSetImg" src={require("../images/mysql.png")} alt="mysqllogo" />MySQL</td>
                                        </tr>
                                        <tr>
                                            <td><img className="skillSetImg" src={require("../images/css3.png")} alt="css3logo" />CSS3</td>
                                            <td><img className="skillSetImg" src={require("../images/mongodb.png")} alt="mongodblogo" />MongoDB</td>
                                        </tr>
                                        <tr>
                                            <td><img className="skillSetImg" src={require("../images/es6.png")} alt="es6logo" />ES6</td>
                                            <td><img className="skillSetImg" src={require("../images/firebase.png")} alt="firebaselogo" />Google Firebase</td>
                                        </tr>
                                        <tr>
                                            <td><img className="skillSetImg" src={require("../images/reactjs.svg")} alt="reactlogo" />React.js</td>
                                            <td><img className="skillSetImg" src={require("../images/node.png")} alt="nodelogo" />Node.js</td>
                                        </tr>
                                        <tr>
                                            <td><img className="skillSetImg" src={require("../images/jquery.png")} alt="jquerylogo" />jQuery</td>
                                            <td><img className="skillSetImg" src={require("../images/ajax.png")} alt="ajaxlogo" />AJAX</td>
                                        </tr>
                                        <tr>
                                            <td><img className="skillSetImg" src={require("../images/bootstrap.png")} alt="bootstraplogo" />Bootstrap</td>
                                            <td>Axios</td>
                                        </tr>
                                        <tr>
                                            <td><img className="skillSetImg" src={require("../images/handlebars.png")} alt="handlebarslogo" />Handlebars.js</td>
                                            <td>Express</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Web Hosting / Version Control</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td><img className="skillSetImg" src={require("../images/heroku.png")} alt="herokulogo" />Heroku</td>
                                        </tr>
                                        <tr>
                                            <td><img className="skillSetImg" src={require("../images/github.png")} alt="githublogo" />Git</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </Fade>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Section>

);

export default Home;
