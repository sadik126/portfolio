import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow mb-5'>
                <img src={props.image} alt='' />
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <a href='/'>
                    <i className='fas fa-arrow-right'></i>
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