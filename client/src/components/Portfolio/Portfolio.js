import React from "react";
import "./Portfolio.css"

const Portfolio = () => (
    <div className="container-fluid">
        <div className="row d-flex justify-content-center">
            <div className="main-content col-md-10 pt-1 jumbotron bg-transparent text-dark">
                <div className="col-12">
                    <h1 className="port-header display-5">projects and apps</h1>
                    <h5>some of my recent work, click to access each repo</h5>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 mx-0 p-1">
                        <a target="_blank" href="https://github.com/rs01247/support-ticket">
                            <img className="port-img wow bounceInUp card-img-top rounded" src="./assets/images/portfolio/fs.gif"
                                alt="Forward Support" />
                        </a>
                    </div>
                    <div className="col-md-4 mx-0 p-1">
                        <a target="_blank" href="https://github.com/rs01247/project-week">
                            <img className="port-img card-img-top rounded" src="./assets/images/portfolio/samurai.gif" alt="Samurai Unicorn" />
                        </a>
                    </div>
                    <div className="col-md-4 mx-0 p-1">
                        <a target="_blank" href="https://github.com/rs01247/friend-finder">
                            <img className="port-img card-img-top rounded" src="./assets/images/portfolio/mingle.gif" alt="Friend Finder" />
                        </a>
                    </div>
                    <div className="col-md-4 mx-0 p-1">
                        <a target="_blank" href="https://github.com/rs01247/TriviaGame">
                            <img className="port-img card-img-top rounded" src="./assets/images/portfolio/cs.gif" alt="Trivia Game" />
                        </a>
                    </div>
                    <div className="col-md-4 mx-0 p-1">
                        <a target="_blank" href="https://github.com/rs01247/ffvii-rpg-game">
                            <img className="port-img card-img-top rounded" src="./assets/images/portfolio/ffvii.gif" alt="RPG Game" />
                        </a>
                    </div>
                    <div className="col-md-4 mx-0 p-1">
                        <a target="_blank" href="https://github.com/rs01247/Hangman-game">
                            <img className="port-img wow bounceInUp card-img-top rounded" src="./assets/images/portfolio/avengers.gif"
                                alt="Hangman" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Portfolio;