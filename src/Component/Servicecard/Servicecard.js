import React from 'react';
import './Servicecard.css';

const Servicecard = ({ emoji, heading, detail, link }) => {
    return (
        <div className='card' >
            <img src={emoji} />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button"> <a href={link}>LEARN MORE</a> </button>

        </div>
    );
};

export default Servicecard;