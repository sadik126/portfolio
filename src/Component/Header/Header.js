import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { themeContext } from '../../Context';
import Toggle from '../Toggle/Toggle';
import './Header.css';
import { Link } from "react-scroll";
import s from '../../img/s..png'

const Header = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;

    return (
        <nav class="navbar navbar-expand-lg navbar-light "  >
            <div class="container-fluid">
                <Link class="navbar-brand fs-2 fw-bolder" to="/" > <img src={s} alt="" /><span style={{ fontWeight: "bold", fontSize: '32px' }}>ADIK</span> </Link>
                <Toggle></Toggle>
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0" >
                        <li class="nav-item me-2">
                            <Link activeClass="active" class="nav-link" aria-current="page" href="/">Home</Link>
                        </li>
                        <li class="nav-item me-2 ">
                            <a class="nav-link" href="/blog" >Blogs</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="nav-link" href="#experience" spy={true} smooth={true}>Experience</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="nav-link" href="#projects" spy={true} smooth={true}>Projects</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="nav-link" href="#about" spy={true} smooth={true}>About</a>
                        </li>
                        <li class="nav-item1">
                            <Link class="nav-link1" to="contact" spy={true} smooth={true}><button className="button n-button btn-grad">Contact</button></Link>
                        </li>




                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;