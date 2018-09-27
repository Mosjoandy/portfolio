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
                    {/* <Fade left> */}
                        <div id="bioCard" className="card">
                            <div className="card-body">
                                <h2>
                                    <Fade left cascade delay={700} duration={1500}>
                                        Hi there, I'm Nick.
                                    </Fade>
                                </h2>
                                <Fade left cascade delay={700} duration={1500}>
                                    <p>
                                   
                                        I am a recent graduate from the UC Berkeley Coding Bootcamp.
                                            My skillset is in full-stack development, but I have a great ineterest in UX/UI and general
                                            front end web development. I am always trying to learn something new and enjoy working
                                            with others.
                                   
                                    </p>
                                </Fade>
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Front-End Technology</th>
                                            <th scope="col">Back-End Technology</th>
                                        </tr>
                                    </thead>
                                    <Flip top cascade delay={600} duration={2000}>
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
                                    </Flip>
                                </table>

                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Web Hosting / Version Control</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Flip top cascade delay={600} duration={2000}>
                                            <tr>
                                                <td><img className="skillSetImg" src={require("../images/heroku.png")} alt="herokulogo" />Heroku</td>
                                            </tr>
                                            <tr>
                                                <td><img className="skillSetImg" src={require("../images/github.png")} alt="githublogo" />Git</td>
                                            </tr>
                                        </Flip>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    {/* </Fade> */}
                </Col>
                <Col size="md-6">
                    {/* <div className="card">
                        <div className="card-body">
                            <h2 className="homeTitle">Hi there, I'm Nick.</h2>
                            <p>I am a recent graduate from the UC Berkeley Coding Bootcamp.
                                I gained new some skills:</p>
                            <p>ES6, AJAX, Axios, React.js, Node.js, Express.js, MongoDB, MySQL, Google Firebase,
                                jQuery, Bootstrap, HTML5, CSS3, Handlebars.js, Git, Heroku
                            </p>
                            <p>My skillset is in full-stack development, but I have a great ineterest in UX/UI and scrum.
                                I am always trying to learn something new and enjoy working with other like-minded people.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <img className="skillSetImg" src={require("../images/es6.png")} alt="es6logo" />
                        <img className="skillSetImg" src={require("../images/html5.png")} alt="html5logo" />
                        <img className="skillSetImg" src={require("../images/css3.png")} alt="css3logo" />
                        <img className="skillSetImg" src={require("../images/jquery.png")} alt="jquerylogo" />
                        <img className="skillSetImg" src={require("../images/bootstrap.png")} alt="bootstraplogo" />
                        <img className="skillSetImg" src={require("../images/reactjs.svg")} alt="reactlogo" />
                        <img className="skillSetImg" src={require("../images/node.png")} alt="nodelogo" />
                        <img className="skillSetImg" src={require("../images/ajax.png")} alt="ajaxlogo" />
                        <img className="skillSetImg" src={require("../images/mongodb.png")} alt="mongodblogo" />
                        <img className="skillSetImg" src={require("../images/mysql.png")} alt="mysqllogo" />
                        <img className="skillSetImg" src={require("../images/firebase.png")} alt="firebaselogo" />
                        <img className="skillSetImg" src={require("../images/github.png")} alt="githublogo" />
                    </div> */}
                </Col>
            </Row>
        </Container>
    </Section>

);

export default Home;
