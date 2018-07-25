import React from "react";
import "./Home.css";

const Home = () => (

    <div className="homebg">
        <div className="row border homeContent">
            <div className="col-md-6 border">
                <div className="homeCard rounded">
                    <h2 className="homeTitle">Hi there, I'm Nick.</h2>
                    <hr />

                    <p>I am a recent graduate from the UC Berkeley Coding Bootcamp.
                        I gained new some skills:</p>
                    <p>ES6, AJAX, Axios, React.js, Node.js, Express.js, MongoDB, MySQL, Google Firebase,
                        jQuery, Bootstrap, HTML5, CSS3, Handlebars.js, Git, Heroku
                    </p>
                    <p>My skillset is in full-stack development, but I have a great ineterest in UX/UI and scrum.
                        I am always trying to learn something new and enjoy working with other like-minded people.
                    </p>

                    <hr />
                    <div className="logoSet">
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
                    </div>
                </div>
            </div>

            <div className="col-md-6 border">
                {/* IMAGE HERE OF MY FACE */}
            </div>
        </div>
    </div>

);

export default Home;
