import Container from "../UI/Container/Container";
import cardGreen from "../../assets/img/card-green.png";
import cardGreen2 from "../../assets/img/card2.png";
import bigStar from "../../assets/img/big-Star.png";

const PerfectCredCard = () => {
  return (
    <Container>
      <div className="md:py-[128px] md:grid md:grid-cols-2">
        <div className=" md:w-[454px] md:h-[488px]">
          <div className="relative">
            <img
              className="absolute z-30 left-5 opacity-60"
              src={cardGreen2}
              alt=""
            />
            <img className="absolute z-10 top-[170px]" src={cardGreen} alt="" />
            <img
              className="absolute z-20 top-[220px] left-[312px] h-[264px]"
              src={bigStar}
              alt=""
            />
          </div>
        </div>
        <div className="md:py-[75px] ">
          <h1 className="text-white font-bold md:text-[40px] md:leading-[57.92px]">
            Find the Perfect Credit Card for You
          </h1>
          <p className="text-[#ADB2B1] font-normal text-[16px] md:leading-[24px] py-[24px]">
            Discover your ideal credit card with ease. Our comprehensive
            selection caters to every financial need and lifestyle. Whether you
            seek cashback rewards, travel perks, or building credit, we have the
            perfect credit card waiting for you. Unleash the possibilities and
            find the credit card that fits your unique goals and aspirations.
          </p>
          <button className="font-medium leading-6 text-[16px] bg-[#2BB32A] py-4 px-8 border-none rounded-[64px]">
            Learn More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default PerfectCredCard;
