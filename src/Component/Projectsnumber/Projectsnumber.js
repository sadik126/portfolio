import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './Projectnumber.css';

const Projectsnumber = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='experience'>
            <div className="achivement">
                <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
                    4+
                </div>
                <span style={{ color: darkMode ? 'white' : '' }}>years</span>
                <span>Experience</span>
            </div>
            <div className="achivement">
                <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
                    20+
                </div>
                <span style={{ color: darkMode ? 'white' : '' }}>Completed</span>
                <span>Projects</span>
            </div>
            <div className="achivement">
                <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
                    2+
                </div>
                <span style={{ color: darkMode ? 'white' : '' }}>Companies</span>
                <span>Work</span>

            </div>

        </div>
    );
};

export default Projectsnumber;