import React from "react";
import Faq from "../../Components/FAQ/Faq";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Details from "./Details/Details";
import Testimonial from "../../Components/Testimonial/Testimonial";
import WeOffer from "../../Components/WeOffer/WeOffer";
import PerfectCredCard from "../../Components/PerfectCreditCard/PerfectCredCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <Details />
      <Category />
      <WeOffer></WeOffer>
      <PerfectCredCard></PerfectCredCard>
      <Testimonial></Testimonial>
      <Faq></Faq>
    </div>
  );
};

export default Home;
