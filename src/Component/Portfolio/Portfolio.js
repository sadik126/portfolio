import React, { useContext } from 'react';
import Header from '../Header/Header';
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react"
import tools from '../../img/tools.PNG';
import book from '../../img/book.PNG';
import wild from '../../img/wild.PNG';
import egrocery from '../../img/egrocery.PNG';
import mobile from '../../img/mobile bazar.PNG';
import ucl from '../../img/ucl.PNG'
import "swiper/css";
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='portfolio'>

            <span style={{ color: darkMode ? 'white' : '' }}>Recent projects</span>
            <span>Portfolio</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"


            >
                <SwiperSlide>
                    <img src={tools} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={book} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={wild} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={egrocery} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mobile} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ucl} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;