import React from 'react';
import Card from './Card';
import './Allprojects.css'

const Allprojects = () => {
    const Portfolio_data = [
        {
            id: 1,
            category: "Photography website",
            dis: " A photography website with multiple use Support crud operations of many service User can book their service ",

            title: "WILD STUDIO ",
            image: "https://i.ibb.co/R4bbRvN/wildfull.png",
        },
        {
            id: 2,
            category: "Book Shop website",

            title: "BOOK LOVER",
            image: "https://i.ibb.co/JcnbRnq/1c666e8b-8a5d-417b-9a4b-742b9de9e6ad.png",
        },
        {
            id: 3,
            category: "Tools website",

            title: "TOOLS WORLD  ",
            image: "https://i.ibb.co/hXqg44X/React-App.png",
        }

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