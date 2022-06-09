import React from 'react';
import Header from '../Header/Header';
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react"
import tools from '../../img/tools.PNG';
import book from '../../img/book.PNG';
import wild from '../../img/wild.PNG';
import "swiper/css";

const Portfolio = () => {
    return (
        <div className='portfolio'>

            <span>Recent projects</span>
            <span>Portfolio</span>

            <Swiper>
                <SwiperSlide>
                    <img src={tools} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={book} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={wild} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;