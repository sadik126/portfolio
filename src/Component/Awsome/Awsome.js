import React, { useContext } from 'react';
import './Awsome.css'
import heart from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Servicecard from '../Servicecard/Servicecard';
import resume from './Resume.pdf';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Awsome = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 3, type: 'spring' }
    return (
        <div className='services' id='service'>
            {/* left */}
            <div className="awsome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome </span>
                <span>Services</span>
                <span>We build web apps for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate systems together for coherent operation. Check our web application development services</span>
                <br />
                {/* <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero a quia inventore!</span> */}
                <a href={resume} download>
                    <button className='button s-button'>Download Resume</button>

                </a>

                <div className="blur s-blur3" style={{ background: "#ABF1FF94", left: "-18rem", top: "13rem" }}></div>

            </div>

            {/* right */}
            <div className="cards">
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25%' }}
                    transition={transition}
                    className='heart' style={{ left: '12rem' }}>
                    <Servicecard emoji={heart} heading={'Design'} detail={'Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd'}></Servicecard>
                </motion.div>

                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    style={{ left: '-4rem', top: '12rem' }}>
                    <Servicecard emoji={glasses} heading={'Web Development'} detail={'HTML , CSS, javascript , react , php , node js ,express js , mongodb'}></Servicecard>
                </motion.div>

                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    style={{ top: "19rem", left: "19rem" }}>
                    <Servicecard emoji={humble} heading={'UI/UX Design'} detail={'Lorem ispum dummy text are usually use in section where we need some random text'}></Servicecard>
                </motion.div>

                <div
                    className="blur s-blur4"
                    style={{ background: "#94c994", left: "14rem", top: "8rem" }}
                ></div>

            </div>

        </div>
    );
};

export default Awsome;