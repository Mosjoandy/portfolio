import React, { Component } from "react";
import "./Arrow.css";


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: false,
            toggle: false
        };
        this.rotatingDone = this.rotatingDone.bind(this);
    }

    componentDidMount() {
        const elm = this.image;
        elm.addEventListener("animationend", this.rotatingDone);
    }

    componentWillUnmount() {
        const elm = this.image;
        elm.removeEventListener("animationend", this.rotatingDone);
    }

    rotatingDone() {
        this.setState(function (state) {
            return {
                toggle: !state.toggle,
                rotate: false
            };
        });
    }

    render() {
        const { rotate, toggle } = this.state;

        return (
            <span>
                <img
                    className={rotate ? "skillSetImg rotate" : "skillSetImg"}
                    ref={elm => { this.image = elm; }}
                    id={!this.state.rotate ? "arrowThing" : ""}
                    onClick={() => this.setState({ rotate: true })}
                    src=
                    // {require("../images/arrowRight.png")}
                    {toggle
                        ? require("../images/arrowDown.png")
                        : require("../images/arrowRight.png")
                    }
                    alt="arrowDown" />
             
            </span>
        )
    }

}

export default Contact;
