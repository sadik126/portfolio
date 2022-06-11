import React from 'react';
import Card from './Card';
import './Allprojects.css'

const Allprojects = () => {
    const Portfolio_data = [
        {
            id: 1,
            category: "Photography website",
            description: 'It is not so easy to become photographer. Simply getting and SLR in hand don’t make you a good photographer. You need to have those skills and creativity to capture the best of candid moments. The trickiest photographer is wildlife. Though it is so much in demand, there are so many advantages and disadvantages of wildlife photography',
            dis: " A photography website with multiple use   ",
            dis1: " Support crud operations of many service ",
            dis2: "User can book their service",

            title: "WILD STUDIO ",
            link: "https://wildstudio-1db3d.web.app/",
            description: "Bookselling is the commercial trading of books which is the retail and distribution end of the publishing process. People who engage in bookselling are called booksellers, bookdealers, bookpeople, bookmen, or bookwomen.",

            image: "https://i.ibb.co/R4bbRvN/wildfull.png",
            image1: "https://i.ibb.co/sbd9VRC/wild1.png",
            image2: "https://i.ibb.co/9wK6m5D/wild2.png",
            image3: "https://i.ibb.co/tsY68tk/wild3.png"
        },
        {
            id: 2,
            category: "Book Shop website",
            dis: " A book shop website with multiple users for selling book ",
            dis1: "Support crud operations of many products",
            dis2: "Google login features and user can post their product and update their stock ",

            title: "BOOK LOVER",
            link: "https://book-shop-f5159.web.app/",
            image: "https://i.ibb.co/JcnbRnq/1c666e8b-8a5d-417b-9a4b-742b9de9e6ad.png",
            image1: "https://i.ibb.co/kxnxjpZ/book1.png",
            image2: "https://i.ibb.co/9TwFJFd/book2.png",
            image3: "https://i.ibb.co/dpnHVJM/book3.png"
        },
        {
            id: 3,
            category: "Tools website",
            dis: " A computer tools shopping website with admin panel",
            dis1: " Support crud operations of many products",
            dis2: "Options for admin to add more services and functionalities",

            title: "TOOLS WORLD  ",
            link: "https://tools-world-559cc.web.app/",
            image: "https://i.ibb.co/hXqg44X/React-App.png",
            image1: "https://i.ibb.co/BLm5rzM/toolsworld1.png",
            image2: "https://i.ibb.co/1QHkZsP/tools-dashboard.png",
            image3: "https://i.ibb.co/tQxr5CF/login.png"
        }

    ]


    return (
        <div>
            <section className='Portfolio top' id='portfolio'>
                <div className='container'>
                    <div className='heading text-center '>
                        <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                        <h1>My Projects</h1>
                    </div>

                    <div className='content grid'>
                        {Portfolio_data.map((value, index) => {
                            return <Card key={index} description={value.description} image={value.image} image3={value.image3} image2={value.image2} image1={value.image1} link={value.link} dis={value.dis} dis1={value.dis1} dis2={value.dis2} category={value.category} totalLike={value.totalLike} title={value.title} />
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