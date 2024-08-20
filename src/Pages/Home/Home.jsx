import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Details from "./Details/Details";
import Testimonial from "../../Components/Testimonial/Testimonial";
import WeOffer from "../../Components/WeOffer/WeOffer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Details />
      <Category />
      <WeOffer></WeOffer>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
