import React, { Component } from "react";
import "./Main.css"
import Nav from "../Nav";
import Banner from "../Banner";
import Bio from "../Bio";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Footer from "../Footer";

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {

    }


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
        )
    }

}

export default Main;