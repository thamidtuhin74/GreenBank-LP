import { FaArrowRightLong } from "react-icons/fa6";
// import card from "../../../assets/img/credit-card-gray.png";
import user1 from "../../../assets/img/user1.png";
import user2 from "../../../assets/img/user2.png";
import user3 from "../../../assets/img/user3.png";
import star from "../../../assets/img/Star.png";
import Container from "../../../Components/UI/Container/Container";
import Card from "../../../Components/UI/Card/Card";

const Banner = () => {
  return (
    <Container>
      <div className="relative grid md:grid-cols-2 pt-32 overflow-x-clip">
        <div className="text-start order-2 md:order-1">
          <h1 className="font-bold text-4xl md:text-[56px] lg:text-[56px] tracking-[-2.5%] pt-36 md:pt-0 lg:pt-0 leading-[40px] md:leading-[64px] lg:leading-[64px]">
            Discover the Perfect Credit Card for You
          </h1>
          <h6 className="py-[31px] text-lg md:text-2xl lg:text-2xl leading-7 md:leading-8 lg:leading-8">
            Discover the power of our secure and rewarding credit cards. Explore
            our range of credit cards and take control of your finances today.
          </h6>
          <button className="flex gap-4 justify-center items-center mb-[31px] font-medium leading-6 text-lg md:text-2xl lg:text-2xl bg-[#2BB32A] py-3 md:py-4 lg:py-4 px-5 md:px-8 lg:px-8 border-none rounded-[64px]">
            Get Started{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </button>
          <div className="flex gap-4 pt-2 md:pt-0 lg:pt-0">
            <div>
              <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                <div className="avatar border-[2px]">
                  <div className="w-10 md:w-12 lg:w-12">
                    <img src={user1} />
                  </div>
                </div>
                <div className="avatar border-[2px]">
                  <div className="w-10 md:w-12 lg:w-12">
                    <img src={user2} />
                  </div>
                </div>
                <div className="avatar border-[2px]">
                  <div className="w-10 md:w-12 lg:w-12">
                    <img src={user3} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-[14px] md:text-[16px] lg:text-[16px] leading-6">
                10.2k+
              </h5>
              <p className="text-[10px] md:text-[13px] lg:text-[13px]">
                Active users around the wordls
              </p>
            </div>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          {/* <img
            className="absolute z-20 -top-24 md:-top-0 lg:-top-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-[50%]"
            src={card}
            alt="card"
          /> */}

          <div className="rotate-[15deg] absolute z-40 bottom-[100px] left-[40px] md:-top-0 md:left-[15%]">
            <Card />
          </div>

          <span className="absolute hidden md:block z-10 blur-[5px] bg-[#2ab32acc]  border-none   badge badge-lg w-[220px] h-[220px] md:w-[330px] md:h-[330px]  rounded-[100%] top-[60px] left-[200px]"></span>

          <span className="absolute z-30 badge badge-primary badge-lg border-none bg-[#2BB32A] w-[220px] h-[220px] md:w-[492px] lg:w-[492px] md:h-[492px] lg:h-[492px] rounded-[100%] -top-24 md:-top-0 lg:-top-0 -right-11 md:-right-36 lg:-right-36"></span>
        </div>
        <span className="absolute blur-[200px] bg-[#2ab32acc] shadow-lg border-none shadow-[#e1ece1]  badge badge-lg w-[220px] h-[220px] md:w-[420px] lg:w-[420px] md:h-[350px] lg:h-[350px] rounded-[100%] -top-[40%] right-[27%]"></span>
        <img
          className="absolute border-none badge badge-lg bg-transparent w-[7%] h-[7%] top-[7%] right-[28%]"
          src={star}
          alt="star"
        />
        <img
          className="absolute border-none badge badge-lg bg-transparent w-[7%] h-[7%] top-[88%] left-[38%]"
          src={star}
          alt="star"
        />
        <img
          className="absolute border-none badge badge-lg bg-transparent w-[5%] h-[4%] -bottom-[7%] right-[18%]"
          src={star}
          alt="star"
        />
        <img
          className="absolute border-none badge badge-lg bg-transparent w-[4%] h-[3%] -bottom-[23%] left-[3%]"
          src={star}
          alt="star"
        />
        <img
          className="absolute border-none badge badge-lg bg-transparent w-[4%] h-[3%] -bottom-[86%] left-[25%]"
          src={star}
          alt="star"
        />
      </div>
    </Container>
  );
};

export default Banner;
