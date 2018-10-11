import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from "./components/Home";
import Odin from "./components/Odin";
import Contact from "./components/Contact";

class App extends Component {

  render() {

    return (
      <div>
        <Nav />
        <Contact />
        <Home />
        <Odin />

      </div>
    );
  };
};

export default App;
