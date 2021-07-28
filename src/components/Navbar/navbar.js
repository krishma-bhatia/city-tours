import React from 'react'
import './navbar.scss';
import logo from '../../logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <img className= "logo" src={logo} alt="city toura logo" />
            <ul className="nav-links">
                <li>
                    <a href="#" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="nav-link">
                        About
                    </a>
                </li>
                <li>
                    <a href="#contact" className="nav-link">
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
