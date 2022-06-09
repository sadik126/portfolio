import React, { useContext } from 'react';
import './Works.css'
import upwork from '../../img/Upwork.png';
import fiver from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import shopify from '../../img/Shopify.png';
import facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='works'>
            <div className="awsome">
                <span style={{ color: darkMode ? 'white' : '' }}>Works for All these </span>
                <span>Brands & Clients</span>
                <spane> Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printingLorem ispum is simpley dummy
                    text
                    <br />
                    y dummy text of printingLorem
                    <br />
                    ispum is simpley dummy text of printing

                </spane>

                {/* <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero a quia inventore!</span> */}

                <button className='button s-button'>Hire me</button>



                <div className="blur s-blur3" style={{ background: "#ABF1FF94", left: "-18rem", top: "13rem" }}></div>

            </div>

            <div className="rightside">
                <div className="mainCircle">
                    <div className="secCircle">
                        <img src={upwork} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={fiver} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={shopify} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={facebook} alt="" />
                    </div>

                </div>

                {/* background */}

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>

        </div>
    );
};

export default Works;