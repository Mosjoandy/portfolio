import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from "./components/Home";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

class App extends Component {

  render() {

    return (
      <div>
        <Nav />
        <Home />
        {/* <Projects />
        <Contact /> */}
      </div>
    );
  };
};

export default App;
