import React from "react";
import "./Footer.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(fab, far)

const Footer = () => (
    <footer className='footer col-12 text-light text-center'>
        <div className="container">
            <h3 id='copy'>
                <a className='footer-link' target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/raymond-song-44a6a857'>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
                &nbsp;
                <a className='footer-link' target="_blank" rel="noopener noreferrer" href='https://github.com/rs01247'>
                    <FontAwesomeIcon icon={["fab", "github-square"]} />
                </a>
                &nbsp;
                <a className='footer-link' target="_blank" rel="noopener noreferrer" href="./files/raymond-song-resume.pdf">
                    <FontAwesomeIcon icon={["far", "file"]} />
                </a>
            </h3>
        </div>
        <p id="copy">
            &copy; Raymond Song • Made with React and Express
        </p>
    </footer>
);

export default Footer;