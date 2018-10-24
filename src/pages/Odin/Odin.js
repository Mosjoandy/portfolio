import React from "react";
import "./Odin.css";
// import { Container, Row, Col, Section } from "../../components/Grid";
// import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

class Odin extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         toggle: false,
    //     };
    //     this.toggle = this.toggle.bind(this);
    // };

    // toggle() {
    //     this.setState(prevState => ({
    //         toggle: !prevState.toggle
    //     }));
    //     console.log(this.state.toggle)
    // }

    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    toggleHidden() {

        this.setState({
            isHidden: !this.state.isHidden
        })

    }


    render() {

        return (
            <Fade>
                <div id="odinCard" className="card mt-4">
                    <div className="card-body">
                        {
                            this.state.isHidden === false ?
                                {/* <div>
                                    <button id="toggler" className="btn" onClick={() => this.toggleHidden()}>+</button>
                                    <Fade>

                                        <img className="lokiPic" src={require("../../components/images/loki.png")} alt="loki's face" />
                                    </Fade>
                                </div> */}
                                :

                                <div>

                                    {/* <button id="toggler" className="btn" onClick={() => this.toggleHidden()}>-</button> */}
                                    {/* <img className="lokiPic" src={require("../../components/images/loki.png")} alt="loki's face" /> */}



                                    <Fade top>
                                        <h1 className="text-center orTitle">Odin's Ravens</h1>
                                        <hr />
                                    </Fade>
                                    <div className="card-body orBody">
                                        <Fade cascade top duration={1200}>
                                            <div id="cardInfo">
                                                <p>
                                                    Odin's Ravens is a digitized version of the card game from Osprey Games.
                                                    In 2016, it was the winner of Games Expo Best Strategic Card and Dice Game.
                                                </p>
                                                <p>
                                                    Our development team has converted all the card graphics into digital form
                                                    to produce an online player versus player experience.
                                                </p>
                                                <p>
                                                    With working lobby chat and multiple game lobbies, players can play our
                                                    version of Odin's Ravens online for free.
                                                </p>
                                                <h4 className="orTitle"><u>Role:</u></h4>
                                                <p>UX/UI Design, Front-End Developer, Project Manager</p>
                                                <h4 className="orTitle"><u>Timeframe:</u></h4>
                                                <p>July 1 - July 11, 2018</p>
                                                <h4 className="orTitle"><u>Technology:</u></h4>
                                                <p>
                                                    <img className="skillSetImg" src={require("../../components/images/reactjs.svg")} alt="reactlogo" />React.js,&nbsp;
                                                    <img className="skillSetImg" src={require("../../components/images/firebase.png")} alt="firebaselogo" />Google Firebase,&nbsp;
                                                    <img className="skillSetImg" src={require("../../components/images/html5.png")} alt="html5logo" />HTML5,&nbsp;
                                                    <img className="skillSetImg" src={require("../../components/images/css3.png")} alt="css3logo" />CSS3,&nbsp;
                                                    <img className="skillSetImg" src={require("../../components/images/bootstrap.png")} alt="bootstraplogo" />Bootstrap
                                                </p>
                                            </div>
                                        </Fade>
                                    </div>
                                    {/* <Fade top cascade >
                                        <div className="card-body orBody">
                                           
                                        </div>
                                    </Fade> */}
                                    <div className="card-body bottomsUp">
                                        <h1 className="text-center">
                                            <Fade top delay={1000}>
                                                <a href="https://odins-ravens.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="playButton">Play Live</button></a>
                                                <a href="https://github.com/Mosjoandy/OdinsWorld" target="_blank" rel="noopener noreferrer"><img id="linksIcon" src={require("../../components/images/git.png")} alt="github icon" /></a>
                                            </Fade>
                                        </h1>
                                    </div>
                                </div>

                        }

                    </div>
                </div>
            </Fade>

            // <div className="card">
            //     <div id="odinCard" className="card glass down">
            //         <div className="card-body">
            //             <img className="lokiPic" src={require("../../components/images/loki.png")} alt="loki's face" />
            //         </div>
            //     </div>
            //     {
            //         this.state.toggle === false ?

            //             <button id="show" className="toggle" onClick={() => this.toggle()}>+</button>

            //             :
            //             <Fade bottom>
            //                 <div id="odinProject">
            //                     <div className="hidden">
            //                         <div id="odinCard" className="card glass down">
            //                             <div className="card-body">
            //                                 <Fade delay={800} top>
            //                                     <h1 className="text-center orTitle">Odin's Ravens</h1>
            //                                 </Fade>
            //                                 <div className="card-body orBody">
            //                                     <Fade delay={1000} cascade top duration={1200}>
            //                                         <div>
            //                                             <p>
            //                                                 Odin's Ravens is a digitized version of the card game from Osprey Games.
            //                                                 In 2016, it was the winner of Games Expo Best Strategic Card and Dice Game.
            //                                              </p>
            //                                             <p>
            //                                                 Our development team has converted all the card graphics into digital form
            //                                                 to produce an online player versus player experience.
            //                                              </p>
            //                                             <p>
            //                                                 With working lobby chat and multiple game lobbies, players can play our
            //                                                 version of Odin's Ravens online for free.
            //                                              </p>
            //                                         </div>
            //                                     </Fade>
            //                                 </div>
            //                                 <Fade top cascade delay={1000}>
            //                                     <div className="card-body orBody">
            //                                         <p>
            //                                             <img className="skillSetImg" src={require("../../components/images/reactjs.svg")} alt="reactlogo" />React.js,&nbsp;
            //                                             <img className="skillSetImg" src={require("../../components/images/firebase.png")} alt="firebaselogo" />Google Firebase,&nbsp;
            //                                             <img className="skillSetImg" src={require("../../components/images/html5.png")} alt="html5logo" />HTML5,&nbsp;
            //                                             <img className="skillSetImg" src={require("../../components/images/css3.png")} alt="css3logo" />CSS3,&nbsp;
            //                                             <img className="skillSetImg" src={require("../../components/images/bootstrap.png")} alt="bootstraplogo" />Bootstrap
            //                                          </p>
            //                                     </div>
            //                                 </Fade>
            //                                 <div className="card-body">
            //                                     <h1 className="text-center">
            //                                         <Fade top delay={2000}>
            //                                             <a href="https://odins-ravens.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            //                                                 <button className="playButton">Play Live</button>
            //                                             </a>
            //                                             <a href="https://github.com/Mosjoandy/OdinsWorld" target="_blank" rel="noopener noreferrer">
            //                                                 <img id="linksIcon" src={require("../../components/images/github.png")} alt="github icon" />
            //                                             </a>
            //                                         </Fade>
            //                                     </h1>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <button className="toggle" onClick={() => this.toggle()}>+</button>
            //                 </div>
            //             </Fade>
            //     }
            // </div>


            // <Fade>
            //     <Section id="odinProject">
            //         <Container>
            //             {/* <Projects /> */}
            //             <Row>
            //                 <Col size="md-6">
            // <Fade right>
            //     <div id="odinCard" className="card">
            //         <div className="card-body">
            //             <Fade delay={800} top>
            //                 <h1 className="text-center orTitle">Odin's Ravens</h1>
            //             </Fade>
            //             <div className="card-body orBody">

            //                 <Fade delay={1000} cascade top duration={1200}>
            //                     <div>
            //                         <p>
            //                             Odin's Ravens is a digitized version of the card game from Osprey Games.
            //                             In 2016, it was the winner of Games Expo Best Strategic Card and Dice Game.
            //                         </p>
            //                         <p>
            //                             Our development team has converted all the card graphics into digital form
            //                             to produce an online player versus player experience.
            //                         </p>
            //                         <p>
            //                             With working lobby chat and multiple game lobbies, players can play our
            //                             version of Odin's Ravens online for free.
            //                         </p>
            //                     </div>
            //                 </Fade>

            //             </div>
            //             <Fade top cascade delay={1000}>
            //                 <div className="card-body orBody">
            //                     <p>
            //                         <img className="skillSetImg" src={require("../../components/images/reactjs.svg")} alt="reactlogo" />React.js,&nbsp;
            //                         <img className="skillSetImg" src={require("../../components/images/firebase.png")} alt="firebaselogo" />Google Firebase,&nbsp;
            //                         <img className="skillSetImg" src={require("../../components/images/html5.png")} alt="html5logo" />HTML5,&nbsp;
            //                         <img className="skillSetImg" src={require("../../components/images/css3.png")} alt="css3logo" />CSS3,&nbsp;
            //                         <img className="skillSetImg" src={require("../../components/images/bootstrap.png")} alt="bootstraplogo" />Bootstrap
            //                     </p>
            //                 </div>
            //             </Fade>
            //             <div className="card-body">
            //                 <h1 className="text-center">
            //                     <Fade top delay={2000}>
            //                         <a href="https://odins-ravens.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="playButton">Play Live</button></a>
            //                         <a href="https://github.com/Mosjoandy/OdinsWorld" target="_blank" rel="noopener noreferrer"><img id="linksIcon" src={require("../../components/images/github.png")} alt="github icon" /></a>
            //                     </Fade>
            //                 </h1>
            //             </div>
            //         </div>
            //     </div>
            // </Fade>
            //                 </Col>

            //                 <Col size="md-6">
            //                     <Fade left>
            //                         <div id="odinCard" className="card">
            //                             <img className="lokiPic" src={require("../../components/images/loki.png")} alt="loki" />
            //                         </div>
            //                     </Fade>
            //                 </Col>
            //             </Row>
            //         </Container>
            //     </Section>
            // </Fade>
        );
    };
};

export default Odin;
