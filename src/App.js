import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Home from "./pages/Home";
import Odin from "./pages/Odin";
import Contact from "./pages/Contact";
import Share from "./pages/Share";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Fade from "react-reveal/Fade";

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route exact path="/odin" component={Odin} />
            <Route exact path="/share" component={Share} /> */}
            <Fade duration={2000}>
              <Route exact path="/contact" component={Contact} />
            </Fade>
          </Switch>
          {/* <Footer /> */}
        </div>

      </Router>
    );
  };
};

export default App;
