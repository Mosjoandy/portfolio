import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Nav from './components/Nav';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

class App extends Component {

  render() {

    return (
      <div>
        {/* <Router> */}
          {/* <div> */}
            <Nav />
            <Home />
            <Projects />
           
            <Contact />
            {/* <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Projects" component={Projects} />
            </Switch> */}
          {/* </div> */}
        {/* </Router> */}
      </div>
    );
  };
};

export default App;
