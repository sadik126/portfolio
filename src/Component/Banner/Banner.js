import React from 'react';
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

const Banner = () => {
    return (
        <div className='intro'>
            <div className="left">
                <div className="name">
                    <span>Hi , I Am </span>
                    <span>Rayhan sadik</span>
                    <span> Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work</span>
                </div>
                <button className='button hire'>Hire me</button>

                <div className="icons" style={{ cursor: 'pointer' }}>
                    <a href="">
                        <img src={github} alt="" />
                    </a>

                    <a href="">
                        <img src={linkdin} alt="" />

                    </a>
                    <a href="
                    ">
                        <img src={instagram} alt="" />

                    </a>



                </div>

            </div>
            <div className="right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glasses} alt="" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <Floating img={crown} txt1='web' txt2='developer'></Floating>
                </div>
                <div style={{ top: '18rem', left: '0rem' }} >
                    <Floating img={thumbup} txt1='best' txt2='designer'></Floating>
                </div>

                {/* blur div  */}
                <div className='blur' style={{ background: "#c7af85" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#49788f",
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