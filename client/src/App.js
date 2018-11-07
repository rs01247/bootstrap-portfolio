import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" component={Main} exact />
            <Route path="/contact" component={Contact} exact />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
