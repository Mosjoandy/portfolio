import React, { Component } from "react";
import { Container, Row, Col, Section } from "../Grid";
import "./Contact.css";
import firebase from "../../utils/firebase";

class Contact extends Component {


    render() {
        return (
            <Section>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <div className="card">
                                <div className="card-body">
                                    hello world
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Section>
        )
    }

}

export default Contact;
