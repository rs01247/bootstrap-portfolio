import React, { Component } from "react";
import "./Contact.css";
import axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }


    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })


    submit(e) {
        e.preventDefault();
        axios.post("/api/email/send", {
            to: "raymondminsong@gmail.com",
            from: this.state.email,
            subject: `Portfolio Email from ${this.state.name}`,
            text: this.state.message,
            html: this.state.message
        })
            .then((res) => console.log("EMAIL SENT"))
            .catch((err) => console.error(err))
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="container-fluid">
                    <div className="row justify-content-center mt-3" id="contact-box">
                        <div className="col-md-8 jumbotron bg-transparent text-dark">
                            <div className="row justify-content-end">
                                <div className="connect col-lg-5">
                                    <img id="lets-connect" src="./public/images/connect-slim.jpg" />
                                </div>
                                <div className="col-lg-7">
                                    <form>
                                        <div className="contact-title form-group">
                                            <label for="formGroupExampleInput">Name</label>
                                            <input type="text" className="contact-form form-control border-0" id="formGroupExampleInput" name="name" value={this.state.name} onChange={this.onChange} />
                                        </div>
                                        <div className="contact-title form-group mt-3">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" className="contact-form form-control border-0" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.onChange} />
                                        </div>
                                        <div className="contact-title form-group mt-3">
                                            <label for="exampleFormControlTextarea1">Message</label>
                                            <textarea className="contact-form form-control border-0" id="exampleFormControlTextarea1" rows="6" name="message" value={this.state.message} onChange={this.onChange}></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-secondary" onClick={this.submit.bind(this)}>Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default Contact;