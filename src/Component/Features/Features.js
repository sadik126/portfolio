import React from 'react';
import Card from './Card';
import './Features.css';

const Features = () => {
    const data = [
        {
            id: 1,
            image: "https://img.icons8.com/ios/64/000000/menu.png",
            title: "Business Stratagy",
            desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
            id: 2,
            image: "https://img.icons8.com/ios/40/000000/open-book.png",
            title: "App Development",
            desc: " It uses a dictionary of over 200 Latin words, combined witha handful of model sentence.",
        },
        {
            id: 3,
            image: "https://img.icons8.com/fluency-systems-regular/64/000000/retro-tv.png ",
            title: "App Development",
            desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
            id: 4,
            image: "https://img.icons8.com/material-outlined/64/000000/topic--v1.png ",
            title: "Mobile App",
            desc: "There are many variations of passages of Lorem Ipsum	available, but the majority.",
        },
        {
            id: 5,
            image: "https://img.icons8.com/ios-filled/64/000000/wifi.png ",
            title: "CEO Marketing",
            desc: "always free from repetition, injected humour, or non-characteristic words etc.",
        },
        {
            id: 6,
            image: "https://img.icons8.com/glyph-neue/50/000000/polyline.png ",
            title: "Personal Portfolio April",
            desc: " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
        },
    ]


    return (
        <>
            <section className='features top' id='features'>
                <div className='container'>
                    <div className='heading'>
                        <h4>Features</h4>
                        <h1>What I Do</h1>
                    </div>

                    <div className='grid'>
                        {data.map((val, index) => {
                            return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                        })}

                        {/*<div className='box btn_shadow'>
              <img src='https://img.icons8.com/glyph-neue/64/000000/polyline.png' alt='' />
              <h2>Personal Portfolio April</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>*/}
                    </div>




                </div>
            </section>

        </>
    );
};

export default Features;