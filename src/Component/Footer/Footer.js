import React from 'react';
import wave from '../../img/wave.png';
import './Footer.css';
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";


const Footer = () => {
    return (
        <div className="footer">
            <img src={wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">

                <div className="f-icons">
                    <Insta color="black" size={"3rem"} />
                    <Facebook color="black" size={"3rem"} />
                    <Gitub color="black" size={"3rem"} />
                </div>
                <span style={{ fontSize: '15px' }}>sadikhimel04@gmail.com</span>
                <p>© 2022. All rights reserved by Rayhan sadik.</p>
            </div>
        </div>
    );
};

export default Footer;