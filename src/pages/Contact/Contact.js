import React, { Component } from "react";
import { Container, Row, Col, Section } from "../../components/Grid";
import "./Contact.css";
import firebase from "../../utils/firebase";
import Fade from "react-reveal/Fade";
// import Footer from "../../components/Footer/Footer";

class Contact extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            name: "",
            message: "",
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log("Name: " + this.state.name);
        console.log("Email: " + this.state.email);
        console.log("Message: " + this.state.message);

        const contact = firebase.database().ref("contact");
        const info = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        contact.push(info);

        this.setState({ submitted: true });
        event.target.reset();
    };

    render() {
        return (
            <div id="contactBG">
                <Section id="contactScroll">
                    <Container>
                        <Row>
                            <Col size="md-12">
                                <h1 className="display-4 text-center">
                                    <Fade top>
                                        Contact
                                    <Fade>
                                            <hr />
                                        </Fade>

                                    </Fade>
                                    <Fade duration={1400} delay={1400}>
                                        <div className="rounded">
                                            <a
                                                className="btn bg-transparent"
                                                download="Nicholas Chan Resume"
                                                href="Resume.pdf">
                                                <h1>Download Resume</h1>
                                            </a>
                                        </div>
                                    </Fade>
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-3">
                            </Col>

                            <Col size="md-6">
                                {
                                    !this.state.submitted ? (

                                        <div id="contactCard" className="card border-0">
                                            <div className="card-body rounded text-center">
                                                <Fade top delay={800}>
                                                    <p>
                                                        Please send me a message and your email!
                                                        </p>
                                                </Fade>
                                            </div>
                                            <div className="card-body rounded">
                                                <form onSubmit={this.handleSubmit}>
                                                    <Fade top cascade delay={1200}>
                                                        <div className="form-group">
                                                            <label className="contactLabel">Name: </label>
                                                            <input type="text" className="form-control mt-1 mb-3" name="name" onChange={this.handleChange} required />

                                                            <label className="contactLabel">Email: </label>
                                                            <input type="email" className="form-control mt-1 mb-3" name="email" onChange={this.handleChange} required />

                                                            <label className="contactMessage">Message: </label>
                                                            <textarea type="text" className="form-control mt-1 mb-3" rows="4" name="message" onChange={this.handleChange} required />
                                                        </div>
                                                        <Fade bottom delay={2000}>
                                                            <button type="submit" className="btn submission" value="Submit">
                                                                Send
                                                                </button>
                                                        </Fade>
                                                    </Fade>
                                                </form>
                                            </div>
                                        </div>

                                    ) : (

                                            <div id="contactCard" className="card text-center border-0">
                                                {/* <div className="card text-center border-0"> */}
                                                <div className="card-body bigger">
                                                    <h1 className="middle">
                                                        <Fade bottom>
                                                            Thanks! I'll be in contact with you soon, {this.state.name}
                                                        </Fade>
                                                    </h1>
                                                </div>
                                                {/* </div> */}
                                            </div>

                                        )
                                }
                                <div id="foot" className="rounded-top justify-content-center d-block text-center mt-4 pt-4 text-white">
                                    © 2018 Nicholas Chan
                                </div>
                            </Col>

                            <Col size="md-3">
                            </Col>
                        </Row>
                        {/* <Footer /> */}
                    </Container>
                </Section>
            </div>
        )
    }

}

export default Contact;
