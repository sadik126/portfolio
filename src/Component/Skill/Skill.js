import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-danger'>My skills</h1>
            <div className='d-flex'>
                <div style={{ width: '50%' }}>
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


                </div>
                <div style={{ width: '50%' }}>

                </div>

            </div>


        </div>
    );
};

export default Skill;