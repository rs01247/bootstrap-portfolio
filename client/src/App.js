import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contaact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Router>
          <div>
            <Route path="/contact" component={Contact} exact />
          </div>
        </Router> */}
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
