import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Home from "./pages/Home";
// import Odin from "./pages/Odin";
import Contact from "./pages/Contact";
// import Share from "./pages/Share";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
// import Fade from "react-reveal/Fade";
import Social from "./components/Social/Social";

class App extends Component {

  render() {

    return (
      // <Router>
      //   <div>
      //     <Nav />
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route exact path="/odin" component={Odin} />
      //       <Route exact path="/share" component={Share} />
      //       <Route exact path="/contact" component={Contact} />
      //     </Switch>
      //     <Footer />
      //   </div>

      // </Router>
      <div>
        <Nav />
        <Social />
        <Home />

        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  };
};

export default App;
