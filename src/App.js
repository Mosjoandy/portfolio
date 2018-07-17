import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Nav from './components/Nav';
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
