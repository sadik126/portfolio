import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { themeContext } from '../../Context';
import Toggle from '../Toggle/Toggle';
import './Header.css';
import { Link } from "react-scroll";

const Header = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <nav class="navbar navbar-expand-lg navbar-light "  >
            <div class="container-fluid">
                <Link class="navbar-brand fs-2 fw-bolder" to="/" style={{ color: darkMode ? "white" : "" }}>Sadik</Link>
                <Toggle></Toggle>
                <button class="navbar-toggler bg-light" style={{ color: darkMode ? "white" : "" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" style={{ color: darkMode ? "white" : "" }}></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0" >
                        <li class="nav-item me-2">
                            <a class="nav-link " style={{ color: darkMode ? "white" : "" }} aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="nav-link" style={{ color: darkMode ? "white" : "" }} href="service">Service</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="nav-link" style={{ color: darkMode ? "white" : "" }} href="experience">Experience</a>
                        </li>
                        <li class="nav-item me-2">
                            <Link class="nav-link" style={{ color: darkMode ? "white" : "" }} to="projects" spy={true} smooth={true}>Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" style={{ color: darkMode ? "white" : "" }} to="contact" spy={true} smooth={true}><button className="button n-button">   Contact</button></Link>
                        </li>




                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;