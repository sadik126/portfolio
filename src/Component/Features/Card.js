import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import arrow from '../../img/coding.png'

const Card = (props) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <>
            <div className='box btn_shadow mb-5 d-flex flex-column'  >
                <img src={props.image} width="120" height="100" alt='' />
                <h2 style={{ fontSize: '1rem' }}>{props.title}</h2>
                <p style={{ fontSize: '16px' }}>{props.desc}</p>
                <a href='/'>
                    {/* <i className='fas fa-arrow-right'></i> */}
                    {/* <img src={arrow} alt="" /> */}
                </a>
            </div>
            {/* <div class="card" style="width: 100%;">
                <img src={props.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{ }props.title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content and beautiful</p>
                    <button class="btn btn-danger">Learn more</button>
                </div>
            </div> */}

        </>
    );
};

export default Card;