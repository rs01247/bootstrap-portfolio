import React from "react";
import "./Nav.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(fab, far)

const Nav = () => (

    <nav className='navbar navbar-expand-md'>
        <a className='d-flex justify-content-start' href='/'>
            <h3 className='pl-2 pr-2' id='yourname'>R A Y M O N D &nbsp; S O N G</h3>
        </a>

        {/* <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExample04' aria-controls='navbarsExample04'
            aria-expanded='false' aria-label='Toggle navigation'>
            <span>
                <i className='fas fa-bars'></i>
            </span>
        </button> */}

        <div className='justify-content-end collapse navbar-collapse' id='navbarsExample04'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='top-link nav-link' href='/contact'>Contact
                        <span className='sr-only'>(current)</span>
                    </a>
                </li>
                {/* <li className='nav-item'>
                    <a className='top-link nav-link' href='/about'>Portfolio</a>
                </li>
                <li className='nav-item'>
                    <a className='top-link nav-link' href='/contact'>Contact </a>
                </li> */}
            </ul>
        </div>
    </nav>
);

export default Nav;