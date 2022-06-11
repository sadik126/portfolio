import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './Review.css';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from "swiper";

const Reviews = () => {
    const clients = [
        {
            img: profilePic1,
            review:
                "Putting together a website is a task, finding the right individual or company is even more complex. I did my search around looking for this particular company that has the ability to create, design and optimized my web site. Thanks God I meet Gus at MiamiWeb, not only they have great taste in design but they can guide you through the process and beyond.",
        },
        {
            img: profilePic2,
            review:
                "Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction.",
        },
        {
            img: profilePic3,
            review:
                "Our company has been working with Web Design Express since 2009. Web Design Express has evolved in a very positive way through the years. We recently worked with them to update our website. We have been mainly working with Edi. We are beyond pleased with Edi's impeccable service. He is extremely helpful in guiding us through the whole process. He is very knowledgeable. He pays close attention to details. He is also very patient in training us on how to use the new administration system. Overall, we are very pleased with Web Design Express.",
        },
        {
            img: profilePic4,
            review:
                "Overall very pleased with Morales and Gustavo and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work.",
        },
    ];
    return (
        <div className='t-wrapper'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

            </div>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span style={{ fontSize: '14px' }}>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>
    );
};

export default Reviews;