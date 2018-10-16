import React from "react";
import "./Home.css";
import { Container, Row, Col, Section } from "../Grid";
// import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const Home = () => (

    <Section>
        <Container>
            <Row>
                <Col size="md-5">
                    <Fade duration={2500}>
                        <div>
                            <img className="rounded-circle" id="profilePic" src={require("../images/profilepic.jpg")} alt="face" />
                        </div>
                    </Fade>
                </Col>

                <Col size="md-7">
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
                                    front end web development. I am always trying to learn something new.
                                </Fade>
                            <Fade delay={1200} cascade>
                                <div id="accordion" className="w-100">

                                    <div class="card w-100">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Front-End Technology
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="card-body">
                                                <img className="skillSetImg" src={require("../images/html5.png")} alt="html5logo" />HTML5, {" "}
                                                <img className="skillSetImg" src={require("../images/css3.png")} alt="css3logo" />CSS3, {" "}
                                                <img className="skillSetImg" src={require("../images/es6.png")} alt="es6logo" />ES6, {" "}
                                                <img className="skillSetImg" src={require("../images/reactjs.svg")} alt="reactlogo" />React.js, {" "}
                                                <img className="skillSetImg" src={require("../images/jquery.png")} alt="jquerylogo" />jQuery, {" "}
                                                <img className="skillSetImg" src={require("../images/bootstrap.png")} alt="bootstraplogo" />Bootstrap, {" "}
                                                <img className="skillSetImg" src={require("../images/handlebars.png")} alt="handlebarslogo" />Handlebars.js
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Back-End Technology
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div class="card-body">
                                                <img className="skillSetImg" src={require("../images/mysql.png")} alt="mysqllogo" />MySQL, {" "}
                                                <img className="skillSetImg" src={require("../images/mongodb.png")} alt="mongodblogo" />MongoDB, {" "}
                                                <img className="skillSetImg" src={require("../images/firebase.png")} alt="firebaselogo" />Google Firebase, {" "}
                                                <img className="skillSetImg" src={require("../images/node.png")} alt="nodelogo" />Node.js, {" "}
                                                <img className="skillSetImg" src={require("../images/ajax.png")} alt="ajaxlogo" />AJAX, Axios, Express

                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Web Hosting / Version Controlled
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div class="card-body">
                                                <img className="skillSetImg" src={require("../images/heroku.png")} alt="herokulogo" />Heroku
                                                <img className="skillSetImg" src={require("../images/github.png")} alt="githublogo" />Git
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <table className="table text-center">
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
                                </table> */}
                            </Fade>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Section>

);

export default Home;
