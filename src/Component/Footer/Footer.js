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
                <span>sadikhimel04@gmail.com</span>
                <div className="f-icons">
                    <Insta color="black" size={"3rem"} />
                    <Facebook color="black" size={"3rem"} />
                    <Gitub color="black" size={"3rem"} />
                </div>
            </div>
        </div>
    );
};

export default Footer;