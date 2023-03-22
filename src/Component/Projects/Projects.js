import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { themeContext } from '../../Context';
import Header from '../Header/Header';
import Cardproject from './Cardproject';
import Project from './Project';

const Projects = () => {

    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;

    const nevigate = useNavigate();

    const nevigatedetail = (id) => {
        nevigate(`/products/${id}`)
    }
    const data = [
        {
            id: 1,
            category: "All out ecommerce",
            description: 'It is not so easy to become photographer. Simply getting and SLR in hand don’t make you a good photographer. You need to have those skills and creativity to capture the best of candid moments. The trickiest photographer is wildlife. Though it is so much in demand, there are so many advantages and disadvantages of wildlife photography',
            dis: " A photography website with multiple use   ",
            dis1: " Support crud operations of many service ",
            dis2: "User can book their service",

            title: "All out ecommerce ",
            link: "https://wildstudio-1db3d.web.app/",


            image: "https://i.ibb.co/NtNpk3q/allout-screenshot.png",
            image1: "https://i.ibb.co/sbd9VRC/wild1.png",
            image2: "https://i.ibb.co/9wK6m5D/wild2.png",
            image3: "https://i.ibb.co/tsY68tk/wild3.png"
        },
        {
            id: 2,
            category: "Teeth Doctor website",
            dis: " A book shop website with multiple users for selling book ",
            dis1: "Support crud operations of many products",
            dis2: "Google login features and user can post their product and update their stock ",

            title: "DOCTOR PORTAL",
            description: "Bookselling is the commercial trading of books which is the retail and distribution end of the publishing process. People who engage in bookselling are called booksellers, bookdealers, bookpeople, bookmen, or bookwomen.",
            link: "https://doctors-portal-36758.web.app/",
            image: "https://i.ibb.co/3dp3fSw/doctors-screenshot.png",
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
            description: "Tool organization can be extremely beneficial to any kind of facility. It may seem like a hassle, but it will help workplaces run more smoothly and ultimately affect the bottom line. The following are just top five reasons to keep an organized workbench, toolbox, or workspace:Reduce wasted time: When tools are not organized, workers can unintentionally waste time trying to locate them",

            title: "TOOLS WORLD",
            link: "https://tools-world-559cc.web.app/",
            image: "https://i.ibb.co/tzj4wY8/tools-world-screenshot.png",
            image1: "https://i.ibb.co/BLm5rzM/toolsworld1.png",
            image2: "https://i.ibb.co/1QHkZsP/tools-dashboard.png",
            image3: "https://i.ibb.co/tQxr5CF/login.png"
        },
        {
            id: 4,
            category: "Mission 2022",
            dis: " A normal portfolio site design",
            dis1: " Support responsive width",
            dis2: "beautiful designs are added",
            description: "Online portfolios aren’t just for certain fields or industries anymore. The importance of having a professional online presence is more important than ever, and an online portfolio will certainly increase your visibility and presence. Creating your portfolio website allows you to share and showcase your work easily with the employers you’d like to work for",

            title: "Mission 2022  ",
            link: "https://mission-2022-1.netlify.app/",
            image: "https://i.ibb.co/2t10FJ9/mission.png",
            image1: "https://i.ibb.co/qmmV5Zf/mission1.png",
            image2: "https://i.ibb.co/RHd9xWP/mission2.png",
            image3: "https://i.ibb.co/89KtkdM/mission3.png"
        }
    ]
    return (
        <div>
            <Header></Header>

            <div className="container" style={{ height: "100rem" }}>
                <h1 className="text-center" style={{ color: "var(--body_color)" }}>
                    Our collection
                </h1>
                <div className="row g-4" style={{ width: "100%", height: "100%" }}>
                    {
                        data.map(d => <Cardproject data={d}></Cardproject>)
                        // <div className='col-md-6 d-flex justify-content-center'>
                        //     <Card style={{ width: '18rem' }}>
                        //         <Card.Img variant="top" src={d.image} height="318" />
                        //         <Card.Body>
                        //             <Card.Title>{d.title}</Card.Title>
                        //             <Card.Text>
                        //                 {d.dis}
                        //             </Card.Text>

                        //             <Button variant="primary" onClick={() => nevigatedetail(d.id)}>Show detail</Button>

                        //         </Card.Body>
                        //     </Card>


                        // </div>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Projects;