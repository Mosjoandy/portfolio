import React, { Component } from "react";
import { Container, Row, Col, Section } from "../../components/Grid";
import "./Contact.css";
import firebase from "../../utils/firebase";
import Fade from "react-reveal/Fade";

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
            <Section>
                <Container>
                    <Row>
                        <Col size="md-3">
                        </Col>

                        <Col size="md-6">
                            {!this.state.submitted ? (
                                <div id="contactCard">
                                    <div className="card border-0" id="middle">
                                        <h1 className="text-center">
                                            <Fade bottom>
                                                Contact
                                            </Fade>
                                        </h1>
                                        <div className="card-body">
                                            <Fade bottom>
                                                <p>
                                                    Please send me a message and your email!
                                                </p>
                                            </Fade>
                                        </div>

                                        <form onSubmit={this.handleSubmit}>
                                            <Fade bottom cascade>
                                                <div className="form-group">
                                                    <label className="contactLabel">Name: </label>
                                                    <input type="text" className="form-control mt-1 mb-3" name="name" onChange={this.handleChange} required />

                                                    <label className="contactLabel">Email: </label>
                                                    <input type="email" className="form-control mt-1 mb-3" name="email" onChange={this.handleChange} required />

                                                    <label className="contactMessage">Message: </label>
                                                    <textarea type="text" className="form-control mt-1 mb-3" rows="4" name="message" onChange={this.handleChange} required />
                                                </div>
                                                <button type="submit"
                                                    className="btn"
                                                    value="Submit"
                                                >Send</button>
                                            </Fade>
                                        </form>
                                    </div>
                                </div>
                            ) : (
                                    <div id="contactCard">
                                        <div className="card text-center border-0">

                                            <h1>
                                                <Fade bottom>
                                                    Thanks! I'll be in contact with you soon, {this.state.name}
                                                </Fade>
                                            </h1>
                                        </div>
                                    </div>
                                )}
                        </Col>

                        <Col size="md-3">
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }

}

export default Contact;
