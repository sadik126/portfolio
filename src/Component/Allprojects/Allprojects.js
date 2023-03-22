import React, { useContext } from 'react';
import Card from './Card';
import './Allprojects.css'
import { themeContext } from '../../Context';
import Loading from '../Loading/Loading';

const Allprojects = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    const Portfolio_data = [
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
            <section className='Portfolio top' id='projects'>
                <div className='container'>
                    <div className='heading text-center '>
                        <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                        <h1 style={{ color: "var(--body_color)" }}>My Projects</h1>
                    </div>

                    <div className='content grid'>

                        {Portfolio_data.map((value, index) => {
                            return <Card key={index} description={value.description} image={value.image} image3={value.image3} image2={value.image2} image1={value.image1} link={value.link} dis={value.dis} dis1={value.dis1} dis2={value.dis2} category={value.category} totalLike={value.totalLike} title={value.title} />
                        })}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Allprojects;