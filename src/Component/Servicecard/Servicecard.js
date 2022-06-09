import React from 'react';
import './Servicecard.css';

const Servicecard = ({ emoji, heading, detail }) => {
    return (
        <div className='card' >
            <img src={emoji} />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>

        </div>
    );
};

export default Servicecard;