import React, { useContext } from 'react';
import Header from '../Header/Header';
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react"
import tools from '../../img/tools world.PNG';
import doctors from '../../img/doctors.PNG';
import allout from '../../img/allout.PNG';
import metro from '../../img/convention hall.PNG';
import taka from '../../img/taka poysa.PNG';
import book from '../../img/book.PNG';
import wild from '../../img/wild.PNG';
import egrocery from '../../img/egrocery.PNG';
import mobile from '../../img/mobile bazar.PNG';
import ucl from '../../img/ucl.PNG'
import "swiper/css";
import { themeContext } from '../../Context';
import mission from '../../img/mission.PNG';

const Portfolio = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    return (
        <div className='portfolio' id='experience'>

            <span style={{ color: "var(--body_color)" }}>Recent projects</span>
            <span>Portfolio</span>

            <div className="blur s-blur9" style={{ background: "#e769446b", left: "7rem", top: "1rem" }}></div>

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
                    <img src={doctors} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={allout} alt="" />
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
                    <img src={metro} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={taka} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ucl} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mission} alt="" />
                </SwiperSlide>
            </Swiper>



        </div>
    );
};

export default Portfolio;