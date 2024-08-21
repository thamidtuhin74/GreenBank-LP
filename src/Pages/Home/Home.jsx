import React from 'react';
import Faq from '../../Components/FAQ/Faq';
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Details from "./Details/Details";

const Home = () => {
    return (
        <div>
            <Banner />
            <Details />
            <Category />
            <Faq></Faq>
        </div>
    );
};

export default Home;
