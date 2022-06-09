import React from 'react';
import Awsome from '../Awsome/Awsome';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Projectsnumber from '../Projectsnumber/Projectsnumber';
import Works from '../Works/Works';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Awsome></Awsome>
            <Projectsnumber></Projectsnumber>
            <Works></Works>
            <Portfolio></Portfolio>

        </div>
    );
};

export default Home;