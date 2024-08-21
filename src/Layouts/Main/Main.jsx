import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';
import FooterTop from '../../Components/Shared/Footer/FooterTop/FooterTop';

const Main = () => {
    return (
        <div className=' '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterTop></FooterTop>
            <Footer></Footer>
        </div>
    );
};

export default Main;