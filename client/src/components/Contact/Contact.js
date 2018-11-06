import React, { Component } from "react";
import "./Contact.css";
import axios from "axios";

class Contact extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    componentDidMount() {

    }   

    submit(e) {
        e.preventDefault();
        axios.post("/api/send", {

        })
        .then((res) => console.log("EMAIL SENT"))       
        .catch((err) => console.error(err))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Contact;