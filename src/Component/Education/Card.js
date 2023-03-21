import React, { useContext } from 'react';
import { themeContext } from '../../Context';

const Card = (props) => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    const { title, year, rate, desc } = props.val
    return (
        <>
            <div className='box btn_shadow'>
                <div className='title_content d_flex'>
                    <div className='title' style={{ color: "var(--body_color)" }}>
                        <h2>{title}</h2>
                        <span>{year}</span>
                    </div>
                    <div className='rate'>
                        <button className='btn_shadow '>{rate}</button>
                    </div>
                </div>
                <hr />
                <p>{desc}</p>
            </div>
        </>
    );
};

export default Card;