import React from 'react';
import Card from './Card';

const Education = () => {
    const ResumeApi = [
        {
            id: 1,
            category: "education",
            year: "University of DVI (1997 - 2001)",
            title: "Personal Portfolio April Fools",
            desc: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            rate: "4.30/5",
        },
        {
            id: 2,
            category: "education",
            year: "College of Studies (2000 - 2002) ",
            title: "Examples Of Personal Portfolio",
            desc: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            rate: "4.50/5",
        },
        {
            id: 3,
            category: "education",
            year: "University of Studies (1997 - 2001) ",
            title: "Tips For Personal Portfolio",
            desc: "If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            rate: "4.80/5 ",
        },
        {
            id: 4,
            category: "experience",
            year: "BSE In CSE (2004 - 2008) ",
            title: "Diploma in Web Development",
            desc: "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            rate: "4.70/5 ",
        },
        {
            id: 5,
            category: "experience",
            year: "Job at Rainbow-Themes (2008 - 2016) ",
            title: "The Personal Portfolio Mystery",
            desc: "Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            rate: "4.95/5 ",
        },
        {
            id: 6,
            category: "experience",
            year: "Works at Plugin Development (2016 - 2020) ",
            title: "Diploma in Computer Science",
            desc: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            rate: "5.00/5 ",
        },
    ]
    return (
        <>
            <section className='Resume' id='resume'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>7+ YEARS OF EXPERIENCE</h4>
                        <h1>My Resume</h1>
                    </div>

                    <div className='content-section mtop d_flex'>
                        <div className='left'>
                            <div className='heading'>
                                <h4>2007-2010</h4>
                                <h1>Education Quality</h1>
                            </div>

                            <div className='content'>
                                {ResumeApi.map((val, id) => {
                                    if (val.category === "education") {
                                        return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                                    }
                                })}

                                {/*<div className='box btn_shadow'>
                    <div className='title_content d_flex'>
                      <div className='title'>
                        <h2>Personal Portfolio April Fools</h2>
                        <span>University of DVI (1997 - 2001)</span>
                      </div>
                      <div className='rate'>
                        <button className='btn_shadow '>4.30/5</button>
                      </div>
                    </div>
                    <hr />
                    <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                  </div>*/}
                            </div>
                        </div>
                        <div className='left'>
                            <div className='heading'>
                                <h4>2007-2010</h4>
                                <h1>Job Experience</h1>
                            </div>

                            <div className='content'>
                                {ResumeApi.map((val, index) => {
                                    if (val.category === "experience") {
                                        return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Education;