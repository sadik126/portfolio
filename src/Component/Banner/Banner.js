import React, { useContext } from 'react';
import './Banner.css'
import github from '../../img/github.png';
import linkdin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/sadik.png';
import thumbup from '../../img/thumbup.png'
import glasses from '../../img/glassesimoji.png';
import crown from '../../img/crown.png';
import Floating from '../Floating/Floating';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import react from '../../img/react1.png';
import node from '../../img/node.png';
import mongo from '../../img/mongo.png';
import html from '../../img/html.png';
import css from '../../img/css.png';
import js from '../../img/js.png';

const Banner = () => {
    const transition = { duration: 2, type: 'spring' }
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    return (
        <div className='intro'>
            <div className="left">
                <div className="name">
                    <span style={{ color: `var(--body_color)` }}>Hi , I Am </span>
                    <span>Rayhan sadik</span>
                    <span> Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work</span>
                </div>
                <button className='button hire'>Hire me</button>

                <div className="icons" style={{ cursor: 'pointer' }}>
                    <a href="https://github.com/sadik126">
                        <img src={github} alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/rayhan-sadik-8b3178199/">
                        <img src={linkdin} alt="" />

                    </a>
                    <a href="https://www.instagram.com/myselfsaadik/">
                        <img src={instagram} alt="" />

                    </a>



                </div>

            </div>
            <div className="right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-56%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glasses} alt="" />
                <motion.div
                    initial={{ left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    className='developer' >
                    <Floating img={react} img1={node} img2={mongo} txt1='web' txt2='developer'></Floating>
                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }} >
                    <Floating img={html} img1={css} img2={js} txt1='best' txt2='designer'></Floating>
                </motion.div>

                {/* blur div  */}
                <div className='blur' style={{ background: "#c79d856e" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#7291a1",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
                <div
                    className="blur"
                    style={{
                        background: "#c990af",
                        top: "-5rem",
                        width: "11rem",
                        height: "11rem",
                        left: "-19rem",
                    }}
                ></div>
            </div>

        </div>
    );
};

export default Banner;