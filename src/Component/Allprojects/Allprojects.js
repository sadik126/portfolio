import React from 'react';
import Card from './Card';
import './Allprojects.css'

const Allprojects = () => {
    const Portfolio_data = [
        {
            id: 1,
            category: "DEVELOPMENT",
            totalLike: "600",
            title: "The services provide for design ",
            image: "https://ibb.co/mFTTfD0",
        },
        {
            id: 2,
            category: "APPLICATION",
            totalLike: "750",
            title: "Mobile app landing design & maintain",
            image: "./image/ecommerce.png",
        },
        {
            id: 3,
            category: "PHOTOSHOP",
            totalLike: "630",
            title: "Logo design creativity & Application ",
            image: "./image/ecommerce.png",
        },
        {
            id: 4,
            category: "FIGMA",
            totalLike: "360",
            title: "Mobile app landing design & Services",
            image: "./image/ecommerce.png",
        },
        {
            id: 5,
            category: "WEB DESIGN",
            totalLike: "280",
            title: "Design for tecnology & services",
            image: "./image/ecommerce.png",
        },
        {
            id: 6,
            category: "WEB DESIGN",
            totalLike: "690",
            title: "App for tecnology & services",
            image: "./image/ecommerce.png",
        },
    ]


    return (
        <div>
            <section className='Portfolio top' id='portfolio'>
                <div className='container'>
                    <div className='heading text-center '>
                        <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                        <h1>My Portfolio</h1>
                    </div>

                    <div className='content grid'>
                        {Portfolio_data.map((value, index) => {
                            return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
                        })}

                        {/*<div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Allprojects;