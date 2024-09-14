import Container from "../UI/Container/Container";
import cardGreen from "../../assets/img/card-green.png";
import cardGreen2 from "../../assets/img/card2.png";
import bigStar from "../../assets/img/big-Star.png";
import star from "../../assets/img/Star.png";

const PerfectCredCard = () => {
  return (
    <Container>
      <div className="relative md:pt-[128px] md:grid md:grid-cols-2">
        <div className=" md:w-[454px] md:h-[488px]">
          <div className="relative">
            <img
              className="absolute max-sm:top-[80px] z-30 max-sm:left-2 md:left-5 opacity-60"
              src={cardGreen2}
              alt=""
            />
            <img
              className="absolute z-10 max-sm:top-[190px] md:top-[170px]"
              src={cardGreen}
              alt=""
            />
            <img
              className="absolute z-20 max-sm:top-[290px] md:top-[220px] md:left-[312px] h-[264px]"
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
        <span className="absolute blur-[250px] bg-[#2ab32acc] shadow-lg border-none shadow-[#e1ece1]  badge badge-lg w-[220px] h-[220px] md:w-[380px]  md:h-[300px] rounded-[100%]  right-0 top-40"></span>
        <img
          className="absolute border-none badge badge-lg bg-transparent w-[5%] h-[8%] top-[190px] right-[480px]"
          src={star}
          alt="star"
        />
      </div>
    </Container>
  );
};

export default PerfectCredCard;
