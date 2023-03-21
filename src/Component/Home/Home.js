import React from 'react';
import About from '../About/About';
import Allprojects from '../Allprojects/Allprojects';
import Awsome from '../Awsome/Awsome';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Projectsnumber from '../Projectsnumber/Projectsnumber';
import Reviews from '../Reviews/Reviews';
import Skill from '../Skill/Skill';
import Works from '../Works/Works';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Awsome></Awsome>
            <About></About>
            <Features></Features>
            <Projectsnumber></Projectsnumber>
            <Works></Works>
            <Skill></Skill>
            <Education></Education>
            {/* <Portfolio></Portfolio>
            <Allprojects></Allprojects>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer> */}

        </div>
    );
};

export default Home;