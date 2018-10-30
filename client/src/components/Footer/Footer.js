import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className='footer col-12 text-light text-center'>
        <div className="container">
            <h3 id='copy'>
                <a className='footer-link' target="_blank" href='https://linkedin.com/in/raymond-song-44a6a857'>
                    <i className='fab fa-linkedin'></i>
                </a>
                &nbsp;
                <a className='footer-link' target="_blank" href='https://github.com/rs01247'>
                    <i className="fab fa-github"></i>
                </a>
                &nbsp;
                <a className='footer-link' target="_blank" href='./assets/files/raymond-song-resume.pdf'>
                    <i className="far fa-file"></i>
                </a>
                &nbsp;
                <a className='footer-link' target="_blank" href='mailto:raymondminsong@gmail.com'>
                    <i className="far fa-envelope"></i>
                </a>
            </h3>
        </div>
        <p className='mb-0'>
            &copy; Raymond Song • Made with React and Bootstrap
        </p>
    </footer>
);

export default Footer;