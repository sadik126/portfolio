import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './Projectnumber.css';

const Projectsnumber = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    return (
        <div className='experience'>
            <div className="achivement">
                <div className="circle" style={{ color: 'var(--body_color)' }}>
                    4+
                </div>
                <span style={{ color: 'orange' }}>years</span>
                <span>Experience</span>
            </div>
            <div className="achivement">
                <div className="circle" style={{ color: 'var(--body_color)' }}>
                    20+
                </div>
                <span style={{ color: 'orange' }}>Completed</span>
                <span>Projects</span>
            </div>
            <div className="achivement">
                <div className="circle" style={{ color: 'var(--body_color)' }}>
                    2+
                </div>
                <span style={{ color: 'orange' }}>Companies</span>
                <span>Work</span>

            </div>

        </div>
    );
};

export default Projectsnumber;