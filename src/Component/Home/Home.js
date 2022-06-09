import React from 'react';
import Awsome from '../Awsome/Awsome';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Projectsnumber from '../Projectsnumber/Projectsnumber';
import Reviews from '../Reviews/Reviews';
import Works from '../Works/Works';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Awsome></Awsome>
            <Projectsnumber></Projectsnumber>
            <Works></Works>
            <Portfolio></Portfolio>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;