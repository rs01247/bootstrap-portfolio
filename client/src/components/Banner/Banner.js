import React from "react";
import "./Banner.css";
import image from "../../assets/images/ccc-alt.png"
import respImage from "../../assets/images/ccc-resp.jpg"

const Banner = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 p-0">
                <img src={image} id="ccc-image" alt="Banner" />
                <img src={respImage} id="resp-image" alt="Responsive Banner" />
            </div>
        </div>
    </div>
);

export default Banner;