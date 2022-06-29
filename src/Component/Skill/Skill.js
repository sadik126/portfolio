import React, { useContext } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { themeContext } from '../../Context';
import './Skill.css';

const Skill = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='container mt-5'>
            <h1 className='text-center' style={{ color: 'orangered' }}>My skills</h1>
            <div className='d-flex flex-column flex-lg-row mt-5 w-100 skills'>
                <div >
                    <h4 className='text-center' style={{ color: darkMode ? "white" : "" }}>Front end skills</h4>
                    <span>Html</span><ProgressBar completed={80} bgColor="linear-gradient(#ff5200, #ed974d)"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>Css</span><ProgressBar completed={70} bgColor="linear-gradient(rgb(0 173 255), rgb(94 77 237))"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>Javascript</span><ProgressBar completed={60} bgColor="linear-gradient(rgb(251 255 0), rgb(237 173 77))"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>Bootsrap</span><ProgressBar completed={80} bgColor="linear-gradient(rgb(122 0 255), rgb(87 77 237))"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>Tailwind</span><ProgressBar completed={75} bgColor="linear-gradient(rgb(51 0 255), rgb(62 113 165))"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />
                    <span>React</span><ProgressBar completed={70} bgColor="linear-gradient(rgb(41 80 225), rgb(62 136 165))"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />


                </div>
                <div >
                    <h4 className='text-center' style={{ color: darkMode ? "white" : "" }}>Back end skills</h4>

                    <span>Mongo DB</span><ProgressBar completed={50} bgColor="linear-gradient(rgb(41 225 81), rgb(62 165 79))"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>Node js</span><ProgressBar completed={40} bgColor="linear-gradient(rgb(52 78 52), rgb(25 106 24))"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>Express js</span><ProgressBar completed={60} bgColor="linear-gradient(rgb(183 189 183), rgb(56 56 56))"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>PHP</span><ProgressBar completed={70} bgColor="linear-gradient(rgb(97 45 255), rgb(53 52 72))"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                    <span>MYSQL</span><ProgressBar completed={50} bgColor="linear-gradient(rgb(255 123 45), rgb(47 141 141))"
                        height='35px'
                        width='70%'
                        transitionDuration='2s'
                        transitionTimingFunction='ease-in-out'
                        animateOnRender='true' />

                </div>

            </div>


        </div>
    );
};

export default Skill;