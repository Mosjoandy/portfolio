import React, { Component } from 'react';
import "./Social.css"

class Social extends Component {
    render() {
        return (
            <div id="socialBar">
                <div>
                    <a rel="noopener noreferrer" href="https://www.instagram.com/whothatchineze/" target="_blank">
                        <img id="socialIco" src={require("../images/instagram.png")} alt="instagram nicholas chan" />
                    </a>
                </div>
                <div>
                    <a rel="noopener noreferrer" href="https://github.com/Mosjoandy" target="_blank">
                        <img id="socialIco" src={require("../images/git.png")} alt="github nicholas chan" />
                    </a>
                </div>
                <div>
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/nicholas-chan-ba225648/" target="_blank">
                        <img id="socialIco" src={require("../images/linkedin.png")} alt="linkedin nicholas chan" />
                    </a>
                </div>
                <div>
                    <a rel="noopener noreferrer" href="mailto:nicholashchan@gmail.com" target="_blank">
                        <img id="socialIco" src={require("../images/email.png")} alt="email nicholas chan" />
                    </a>
                </div>
            </div>
        );
    };
};

export default Social

