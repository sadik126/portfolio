import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Blogs = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <Header></Header>
            <div style={{ height: '100vh' }}>
                <p className='text-center fs-1' style={{ color: darkMode ? "white" : "" }} >Coming soon</p>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blogs;