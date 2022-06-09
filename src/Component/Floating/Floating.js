import React from 'react';
import './Floating.css';

const Floating = ({ img, txt1, txt2 }) => {
    return (
        <div className='floating'>
            <img src={img} alt="" />
            <span>
                {txt1}
                <br />
                {txt2}
            </span>

        </div>
    );
};

export default Floating;