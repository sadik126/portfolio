import React, { useContext } from 'react';
import './Works.css'
import upwork from '../../img/Upwork.png';
import fiver from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import shopify from '../../img/Shopify.png';
import facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Works = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    return (
        <div className='works' style={{ marginTop: '15rem' }}>
            <div className="awsome">
                <span style={{ color: 'var(--body_color)' }}>Works for All these </span>
                <span>Brands & Clients</span>
                <span>Branding is just as important for your clients as it is for yourself. For first time freelancers,
                    <br />
                    it can be challenging to lose the collaborative team environment of an agency. Silver lining?
                    <br />
                    It’s up to you to set the standard and challenge yourself to deliver outstanding work


                </span>

                {/* <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero a quia inventore!</span> */}

                <button className='button s-button'>Hire me</button>



                <div className="blur s-blur3" style={{ background: "#673ab759", left: "-18rem", top: "13rem" }}></div>

            </div>

            <div className="rightside">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="mainCircle">
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

                </motion.div>

                {/* background */}

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>

        </div>
    );
};

export default Works;