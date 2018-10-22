import React from "react";
import "./Share.css";
import { Container, Row, Col, Section } from "../../components/Grid";
import Fade from "react-reveal/Fade";
// import Projects from "../Projects";

class Share extends React.Component {

    render() {

        return (
            <div id="shareCard" className="card">
                <div className="card-body">
                    <Fade delay={800} top>
                        <h1 className="text-center">ShareBnB</h1>
                    </Fade>
                    <div className="card-body orBody">

                        <Fade delay={1000} cascade top duration={1200}>
                            <div>
                                <p>
                                    ShareBnB is an AirBnB clone that allows members to share parts of their home,
                                    yard or property with others.
                                                         </p>
                                <p>
                                    Led by a dedicated SCRUM master, our development team created this website
                                    from conception to deployment within 7 days.
                                                         </p>
                                <p>
                                    Members can create an account, sign-in, create new listings, and view listings
                                    that are available based on a designated geolocation.
                                                         </p>
                            </div>
                        </Fade>

                    </div>
                    <Fade top cascade delay={1000}>
                        <div className="card-body orBody">
                            <p>
                                <img className="skillSetImg" src={require("../../components/images/handlebars.png")} alt="handlebarslogo" />Handlebars.js,&nbsp;
                                                         <img className="skillSetImg" src={require("../../components/images/mysql.png")} alt="mysqllogo" />MySQL,&nbsp;
                                                         <img className="skillSetImg" src={require("../../components/images/html5.png")} alt="html5logo" />HTML5,&nbsp;
                                                         <img className="skillSetImg" src={require("../../components/images/css3.png")} alt="css3logo" />CSS3,&nbsp;
                                                         <img className="skillSetImg" src={require("../../components/images/jquery.png")} alt="jquerylogo" />jQuery,&nbsp;
                                Express,&nbsp;
                                                         <img className="skillSetImg" src={require("../../components/images/bootstrap.png")} alt="bootstraplogo" />Bootstrap

                                                     </p>
                        </div>
                    </Fade>
                    <div className="card-body">
                        <h1 className="text-center">
                            <a href="https://mysterious-cliffs-66031.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="shareButton btn btn-success">Live Website</button></a>
                            <a href="https://github.com/Mosjoandy/ShareBnb" target="_blank" rel="noopener noreferrer"><img id="linksIcon" src={require("../../components/images/github.png")} alt="github icon" /></a>
                        </h1>
                    </div>
                </div>
            </div>


            // <Fade>
            //     <Section id="shareProject">
            //         <Container>
            //             {/* <Projects /> */}
            //             <Row>
            //                 <Col size="md-6">
            //                     <Fade right>
            //                         <div id="shareCardPic" className="card">
            //                             <img className="sharePicZoom rounded" src={require("../../components/images/sharePic.png")} alt="shareBnb" />
            //                         </div>

            //                     </Fade>
            //                 </Col>

            //                 <Col size="md-6">
            //                     <Fade left>
            //                         <div id="shareCard" className="card text-white">
            //                             <div className="card-body">
            //                                 <Fade delay={800} top>
            //                                     <h1 className="text-center">ShareBnB</h1>
            //                                 </Fade>
            //                                 <div className="card-body orBody">

            //                                     <Fade delay={1000} cascade top duration={1200}>
            //                                         <div>
            //                                             <p>
            //                                                 ShareBnB is an AirBnB clone that allows members to share parts of their home,
            //                                                 yard or property with others.
            //                                             </p>
            //                                             <p>
            //                                                 Led by a dedicated SCRUM master, our development team created this website
            //                                                 from conception to deployment within 7 days.
            //                                             </p>
            //                                             <p>
            //                                                 Members can create an account, sign-in, create new listings, and view listings
            //                                                 that are available based on a designated geolocation.
            //                                             </p>
            //                                         </div>
            //                                     </Fade>

            //                                 </div>
            //                                 <Fade top cascade delay={1000}>
            //                                     <div className="card-body orBody">
            //                                         <p>
            //                                             <img className="skillSetImg" src={require("../../components/images/handlebars.png")} alt="handlebarslogo" />Handlebars.js,&nbsp;
            //                                             <img className="skillSetImg" src={require("../../components/images/mysql.png")} alt="mysqllogo" />MySQL,&nbsp;
            //                                             <img className="skillSetImg" src={require("../../components/images/html5.png")} alt="html5logo" />HTML5,&nbsp;
            //                                             <img className="skillSetImg" src={require("../../components/images/css3.png")} alt="css3logo" />CSS3,&nbsp;
            //                                             <img className="skillSetImg" src={require("../../components/images/jquery.png")} alt="jquerylogo" />jQuery,&nbsp;
            //                                             Express,&nbsp;
            //                                             <img className="skillSetImg" src={require("../../components/images/bootstrap.png")} alt="bootstraplogo" />Bootstrap

            //                                         </p>
            //                                     </div>
            //                                 </Fade>
            //                                 <div className="card-body">
            //                                     <h1 className="text-center">
            //                                         <a href="https://mysterious-cliffs-66031.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="shareButton btn btn-success">Live Website</button></a>
            //                                         <a href="https://github.com/Mosjoandy/ShareBnb" target="_blank" rel="noopener noreferrer"><img id="linksIcon" src={require("../../components/images/github.png")} alt="github icon" /></a>
            //                                     </h1>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </Fade>
            //                 </Col>
            //             </Row>
            //         </Container>
            //     </Section>
            // </Fade>
        )
    };
}
export default Share;
