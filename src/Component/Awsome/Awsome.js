import React from 'react';
import './Awsome.css'
import heart from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';

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
                <button className='button s-button'>Download Resume</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

            </div>

            {/* right */}
            <div className="card">
                <span>this is right</span>

            </div>

        </div>
    );
};

export default Awsome;