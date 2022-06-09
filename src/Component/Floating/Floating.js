import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './Floating.css';

const Floating = ({ img, txt1, txt2 }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='floating' style={{ color: darkMode ? "white" : "" }}>
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