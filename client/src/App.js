import React, { Component } from 'react';
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <Bio />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
