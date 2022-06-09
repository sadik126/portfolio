import React from 'react';
import Awsome from '../Awsome/Awsome';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Projectsnumber from '../Projectsnumber/Projectsnumber';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Awsome></Awsome>
            <Projectsnumber></Projectsnumber>

        </div>
    );
};

export default Home;