import React, { useContext } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { themeContext } from '../../Context';
import './Skill.css';
import html from '../../img/html.png';
import css from '../../img/css.png';
import js from '../../img/js.png';
import bs from '../../img/bootstrap.png';
import tailwind from '../../img/tailwind-css-icon.svg';
import react from '../../img/react-js-icon.svg';
import mongodb from '../../img/mongodb-icon.svg';


const Skill = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    return (
        <div className='container mt-5'>
            <h1 className='text-center' style={{ color: 'orangered' }}>My skills</h1>
            <div className='d-flex flex-column flex-lg-row mt-5 w-100 skills'>
                <div className="blur s-blur7" style={{ background: "#abffd86b", left: "7rem", top: "1rem" }}></div>
                <div >
                    <h4 className='text-center' style={{ color: 'var(--body_color)' }}>Front end skills</h4>
                    <span className='mt-2'>Html <img src={html} style={{ width: '6%' }} alt="" /> </span><ProgressBar completed={80} bgColor="linear-gradient(#ff5200, #ed974d)"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span className='mt-2'>Css <img src={css} style={{ width: '6%' }} alt="" /></span><ProgressBar completed={70} bgColor="linear-gradient(rgb(0 173 255), rgb(94 77 237))"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span className='mt-2'>Javascript <img src={js} style={{ width: '6%' }} alt="" /></span><ProgressBar completed={60} bgColor="linear-gradient(rgb(251 255 0), rgb(237 173 77))"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span className='mt-2'>Bootsrap <img src={bs} style={{ width: '4%' }} alt="" /></span><ProgressBar completed={80} bgColor="linear-gradient(rgb(122 0 255), rgb(87 77 237))"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>Tailwind <img src={tailwind} style={{ width: '6%' }} alt="" /></span><ProgressBar completed={75} bgColor="linear-gradient(rgb(51 0 255), rgb(62 113 165))"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />
                    <span>React <img src={react} style={{ width: '4%' }} alt="" /></span><ProgressBar completed={70} bgColor="linear-gradient(rgb(41 80 225), rgb(62 136 165))"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />


                </div>
                <div >
                    <h4 className='text-center' style={{ color: 'var(--body_color)' }}>Back end skills</h4>

                    <span>Mongo DB <img src={mongodb} style={{ width: '3%' }} alt="" /></span><ProgressBar completed={50} bgColor="linear-gradient(rgb(41 225 81), rgb(62 165 79))"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>Node js <img src="https://img.icons8.com/color/48/null/nodejs.png" /></span><ProgressBar completed={40} bgColor="linear-gradient(rgb(52 78 52), rgb(25 106 24))"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>Express js <img src="https://img.icons8.com/ios/50/null/express-js.png" style={{ width: '6%' }} /></span><ProgressBar completed={60} bgColor="linear-gradient(rgb(183 189 183), rgb(56 56 56))"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>PHP <img src="https://img.icons8.com/officel/50/null/php-logo.png" /></span><ProgressBar completed={70} bgColor="linear-gradient(rgb(97 45 255), rgb(53 52 72))"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>MYSQL <img src="https://img.icons8.com/fluency/48/null/mysql-logo.png" /></span><ProgressBar completed={50} bgColor="linear-gradient(rgb(255 123 45), rgb(47 141 141))"
                        height='35px'
                        width='70%'
                        transitionDuration='4s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                </div>

            </div>


        </div>
    );
};

export default Skill;