import React from "react";
import "./Home.css";
import { Container, Row, Col, Section } from "../../components/Grid";
// import Slide from 'react-reveal/Slide';
// import Fade from 'react-reveal/Fade';
// import Arrow from "../../components/Arrow";
import Flip from "react-reveal/Flip";

const Home = () => (
    <div>
        <Section id="aboutBG">

            <a href="#projectScroll" className="text-center">
                <img id="downsies" src={require("../../components/images/scrollDown.gif")} alt="scrolly down" />
            </a>
        </Section>
        <Section id="mumboJumbo">
            <Container>
                <Row>
                    <Col size="md-12">

                        <div className="jumbotron border-0 bg-transparent text-center">
                            <div className="container">
                                <Flip left cascade duration={1400}>
                                    <h1 className="display-4">Nicholas Chan</h1>
                                </Flip>
                                <Flip right cascade duration={1400} delay={1000}>
                                    <h3 className="quote">Web Developer, at your service.</h3>
                                </Flip>
                            </div>
                        </div>

                    </Col>
                </Row>

            </Container>

        </Section>

        {/* <Section id="aboutMe">
            <Section id="aboutScroll"></Section>
            <Container>
                <Row>
                    <Col size="md-3"></Col>
                    <Col size="md-6">

                        <div id="bioCard" className="card">
                            <Fade>
                                <h1 className="text-center">
                                    About
                                </h1>
                            </Fade>
                            <div className="card-body">
                                <div className="card-body">
                                    <p>
                                        I am a recent graduate from the UC Berkeley Coding Bootcamp pursuing my dream in technology.
                                    </p>
                                    <p>
                                        My first career was in healthcare, where I provided a positive, energetic environment
                                        for patients with acute mental illnesses. My passion for technology grew as I spent more
                                        time working on the computer using healthcare databases and electronic medical record-keeping.
                                        I decided to make the leap into the technology industry.
                                    </p>
                                    <p>
                                        I enjoy turning a person's vision and idea into reality through a dynamic and interactive website.
                                        Just as in healthcare, I love working with teams to overcome challenges. I believe strongly in
                                        camaraderie with my peers and strive to build lasting relationships.
                                    </p>
                                    <p>
                                        Below are some of the projects I have worked on. Some are from bootcamp, while others are for
                                        customers. Please do visit the live links!
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col size="md-3"></Col>
                </Row>
            </Container>
        </Section> */}

        {/* TABLES AND STUFF

        <Fade delay={1200} cascade>
        <div id="accordion" className="w-100">

            <div className="card w-100">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Front-End Technology
                    </button>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        <table className="table text-center">
                            <thead className="collapse">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img className="skillSetImg" src={require("../../components/images/html5.png")} alt="html5logo" />HTML5</td>
                                    <td><img className="skillSetImg" src={require("../../components/images/css3.png")} alt="css3logo" />CSS3</td>
                                    <td><img className="skillSetImg" src={require("../../components/images/es6.png")} alt="es6logo" />ES6</td>
                                </tr>
                                <tr>
                                    <td><img className="skillSetImg" src={require("../../components/images/reactjs.svg")} alt="reactlogo" />React.js</td>
                                    <td><img className="skillSetImg" src={require("../../components/images/jquery.png")} alt="jquerylogo" />jQuery</td>
                                    <td><img className="skillSetImg" src={require("../../components/images/bootstrap.png")} alt="bootstraplogo" />Bootstrap</td>
                                </tr>
                                <tr>
                                    <td><img className="skillSetImg" src={require("../../components/images/handlebars.png")} alt="handlebarslogo" />Handlebars.js</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Back-End Technology
                    </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        <table className="table text-center">
                            <thead className="collapse">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img className="skillSetImg" src={require("../../components/images/mongodb.png")} alt="mongodblogo" />MongoDB</td>
                                    <td><img className="skillSetImg" src={require("../../components/images/mysql.png")} alt="mysqllogo" />MySQL</td>
                                    <td><img className="skillSetImg" src={require("../../components/images/firebase.png")} alt="firebaselogo" />Google Firebase</td>
                                </tr>
                                <tr>
                                    <td><img className="skillSetImg" src={require("../../components/images/node.png")} alt="nodelogo" />Node.js</td>
                                    <td><img className="skillSetImg" src={require("../../components/images/ajax.png")} alt="ajaxlogo" />AJAX</td>
                                    <td><img className="skillSetImg" src={require("../../components/images/html5.png")} alt="html5logo" />HTML5</td>
                                </tr>
                                <tr>
                                    <td>Axios</td>
                                    <td>Express</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Web Hosting / Version Control
                    </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        <table className="table text-center">
                            <thead className="collapse">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img className="skillSetImg" src={require("../../components/images/heroku.png")} alt="herokulogo" />Heroku</td>
                                    <td><img className="skillSetImg" src={require("../../components/images/github.png")} alt="githublogo" />Git</td>
                            
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </Fade> */}

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

    </div>


);

export default Home;

