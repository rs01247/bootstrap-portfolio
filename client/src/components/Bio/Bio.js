import React from "react";
import "./Bio.css";
import pic from "../../assets/images/bio-image.jpg";

const Bio = () => (
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="main-content col-md-10 jumbotron bg-transparent text-dark">
                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <img id="my-pic" className="img-fluid rounded-circle" src={pic} alt="Biography Pic" />
                    </div>
                    <div className="col-lg-8 mt-3" id="about-me">
                        <p>
                            Software developer with a B.S. in Information Systems from UC Riverside. Received training
                            from the UC Irvine web development course to broaden my knowledge and establish a path into
                            the technology sector. The last 5 years of a career in B2B sales and logistics have allowed
                            me to cultivate a skill set based in strong communication, time management, and effective
                            team work. I strongly believe that my ability to correlate a client’s perspective with
                            tangible needs directly translates into practical skills required developing projects and 
                            applications.
                        </p>
                        <p>
                            Comfortable speaking to non-technical audiences about technical subject matter. Proven track 
                            record of achieving quarterly and annual goals through team leadership and planning. Experience 
                            with HTML5, CSS3, JavaScript ES6, jQuery, SQL, as well as the MERN stack (MongoDB, Express, node.js, 
                            React.js). Inherently a forever student and excited to grow in an industry that is centered around the 
                            creation of innovative products. Looking to pivot into software and web development to pursue a harbored 
                            passion for tech.
                        </p>
                        <p>
                            Get to know me better by reaching out!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Bio;