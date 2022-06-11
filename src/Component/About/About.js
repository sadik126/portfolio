import React, { useContext } from 'react';
import './About.css';
import pic from '../../img/aboutme.jpg';
import { themeContext } from '../../Context';

const About = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='container' id='about'>
            <div className="main">
                <img className='aboutimg' src={pic} alt="" />
                <div className="details">
                    <h1 style={{ color: 'orangered' }}>About me</h1>
                    <h5>Developer and designer</h5>
                    <p style={{ color: darkMode ? "#a9a5a5" : "" }}>Hello I am Rayhan sadik . I considered myself as a full stack web developer .

                        I developed so many web related projects . In my university , I developed an ecommerce site which named is egrocery . also, I worked in tools world which is tools selling website . And I also make a book shop and a Photography website for professionals . html , css , javascript , php this type of scripting language makes comfort in web development . I also worked with these type of frameworks like bootsrap , tailwind css , react , express js , node js . I also used NonSQL DATABASE like mongodb and SQL DATABASE like MYSQL.

                        Web development is a fast-paced, challenging career centered on creative problem-solving and continuous innovation. As a web developer we’ll work with a multidisciplinary team of designers, other developers, and marketers to realize your projects.While many web developers come from a more analytical or technical background, we have found that anyone can become a web developer if they apply themselves. For example, we have many successful graduates who used to work in marketing, sales, teaching, customer service, finance, architecture, HR, and IT.


                        Employers struggle to find qualified web developers, and the demand keeps growing. The average developer salary in the United States is $75,773—though that will vary depending on seniority and location.From self-driving cars to the "Internet of Things," developers are changing the way technology and the world works.
                        Web developers are empowered to make a difference.</p>
                    <button className='button'>Lets talk</button>

                </div>

            </div>


        </div>
    );
};

export default About;