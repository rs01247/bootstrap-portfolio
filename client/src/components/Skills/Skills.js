import React from "react";
import "./Skills.css"

const Skills = () => (
    <div className="container-fluid" id="skill-box">
        <div className="row d-flex justify-content-center">
            <div className="main-content col-md-10 jumbotron bg-transparent text-dark">
                <div className="row text-center">
                    <div className="port-header col-12">
                        <h1 className="display-5">technical skills</h1>
                        <h5>front-end / back-end development</h5>
                    </div>
                </div>
                <div className="row text-center justify-content-center mt-4">
                    <div className="col-lg-3 mt-2">
                        <div className="card">
                            <div className="card-header">
                                Languages
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">JavaScript ECMAScript 6</li>
                                <li className="list-group-item">HTML 5</li>
                                <li className="list-group-item">CSS 3</li>
                                <li className="list-group-item">SQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <div className="card">
                            <div className="card-header">
                                Libraries
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">MongoDB</li>
                                <li className="list-group-item">Express</li>
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">Node</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <div className="card">
                            <div className="card-header">
                                Additional
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">GIT</li>
                                <li className="list-group-item">MVC</li>
                                <li className="list-group-item">AJAX</li>
                                <li className="list-group-item">Heroku</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Skills;