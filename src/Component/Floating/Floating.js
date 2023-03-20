import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './Floating.css';

const Floating = ({ img, img1, img2, txt1, txt2 }) => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    return (
        <div className='floating' style={{ background: `#fffdfc1b` }}>
            <div className='d-flex'>
                <img src={img} style={{ width: '50px' }} alt="" />
                <img src={img1} style={{ width: '50px' }} alt="" />
                <img src={img2} style={{ width: '50px' }} alt="" />

            </div>

            <br />
            <span style={{ color: `var(--body_color)` }}>
                {txt1}
                <br />
                {txt2}
            </span>

        </div>
    );
};

export default Floating;