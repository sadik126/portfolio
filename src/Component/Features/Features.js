import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import Card from './Card';
import web from '../../img/coding.png';
import design from '../../img/web design.png';
import desktop from '../../img/desktop.png';


import './Features.css';

const Features = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    const data = [
        {
            id: 1,
            image: web,
            title: "Web Development",
            desc: "Web development services by a professional with 3 years of expertise. Professional UX/UI design and implementation of websites, web portals and other solutions.",
        },
        {
            id: 2,
            image: design,
            title: "Web Design",
            desc: "  Get online fast with our professional web design service. From simple to complex, our website design team will create, host, and update the site for you.",
        },
        {
            id: 3,
            image: desktop,
            title: "Desktop app development",
            desc: "Our desktop application development service is proficient in the latest frameworks and tech, and has the expertise to meet any technical challenges that may arise during implementation",
        }

    ]


    return (
        <>
            <section className='features top' id='features'>
                <div className='container'>
                    <div className='heading'>
                        <h4>Features</h4>
                        <h1 style={{ color: `var(--body_color)` }}>What I Do</h1>
                    </div>

                    <div className='grid' style={{ color: `var(--body_color)` }}>
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