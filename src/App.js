import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from "./components/Home";
import Odin from "./components/Odin";
import Contact from "./components/Contact";
import Share from "./components/Share";
import Footer from "./components/Footer";

class App extends Component {

  render() {

    return (
      <div>
        <Nav />
        <Home />
        <Odin />
        <Share />
        <Contact />
        <Footer />
      </div>
    );
  };
};

export default App;
