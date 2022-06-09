import React from 'react';
import './Awsome.css'
import heart from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Servicecard from '../Servicecard/Servicecard';
import resume from './Resume.pdf';

const Awsome = () => {
    return (
        <div className='services'>
            {/* left */}
            <div className="awsome">
                <span>My Awesome </span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ducimus neque pariatur? Porro, recusandae non.</span>
                <br />
                {/* <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero a quia inventore!</span> */}
                <a href={resume} download>
                    <button className='button s-button'>Download Resume</button>

                </a>

                <div className="blur s-blur3" style={{ background: "#ABF1FF94", left: "-18rem", top: "13rem" }}></div>

            </div>

            {/* right */}
            <div className="cards">
                <div style={{ left: '12rem' }}>
                    <Servicecard emoji={heart} heading={'Design'} detail={'Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd'}></Servicecard>
                </div>

                <div style={{ left: '-4rem', top: '12rem' }}>
                    <Servicecard emoji={glasses} heading={'Web Development'} detail={'HTML , CSS, javascript , react , php , node js ,express js , mongodb'}></Servicecard>
                </div>

                <div style={{ top: "19rem", left: "19rem" }}>
                    <Servicecard emoji={humble} heading={'UI/UX Design'} detail={'Lorem ispum dummy text are usually use in section where we need some random text'}></Servicecard>
                </div>

                <div
                    className="blur s-blur4"
                    style={{ background: "#94c994", left: "14rem", top: "8rem" }}
                ></div>

            </div>

        </div>
    );
};

export default Awsome;