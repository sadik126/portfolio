import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand fs-2 fw-bolder" to="/">Sadik</Link>
                <Link class="navbar-brand" to="/">toggle</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                        <li class="nav-item me-2">
                            <Link class="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item me-2">
                            <Link class="nav-link" to="/service">Service</Link>
                        </li>
                        <li class="nav-item me-2">
                            <Link class="nav-link" to="/experience">Experience</Link>
                        </li>
                        <li class="nav-item me-2">
                            <Link class="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/portfolio"><button className="button n-button">Contact</button></Link>
                        </li>




                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;