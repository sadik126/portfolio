import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../Context';
import Toggle from '../Toggle/Toggle';
import './Header.css';

const Header = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <nav class="navbar navbar-expand-lg navbar-light "  >
            <div class="container-fluid">
                <Link class="navbar-brand fs-2 fw-bolder" to="/" style={{ color: darkMode ? "white" : "" }}>Sadik</Link>
                <Toggle></Toggle>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0" >
                        <li class="nav-item me-2">
                            <Link class="nav-link " style={{ color: darkMode ? "white" : "" }} aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item me-2">
                            <Link class="nav-link" style={{ color: darkMode ? "white" : "" }} to="/service">Service</Link>
                        </li>
                        <li class="nav-item me-2">
                            <Link class="nav-link" style={{ color: darkMode ? "white" : "" }} to="/experience">Experience</Link>
                        </li>
                        <li class="nav-item me-2">
                            <Link class="nav-link" style={{ color: darkMode ? "white" : "" }} to="/portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" style={{ color: darkMode ? "white" : "" }} to="/portfolio"><button className="button n-button">Contact</button></Link>
                        </li>




                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;