import Container from "../../../Components/UI/Container/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import card from "../../../assets/img/credit-card-gray.png";
import user1 from "../../../assets/img/user1.png";
import user2 from "../../../assets/img/user2.png";
import user3 from "../../../assets/img/user3.png";

const Banner = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 pt-32 overflow-x-clip">
        <div className="text-start">
          <h1 className="font-bold text-[56px] tracking-[-2.5%] leading-[64px]">
            Discover the Perfect Credit Card for You
          </h1>
          <h6 className="py-[31px] text-2xl leading-8">
            Discover the power of our secure and rewarding credit cards. Explore
            our range of credit cards and take control of your finances today.
          </h6>
          <button className="flex gap-4 justify-center items-center mb-[31px] font-medium leading-6 text-2xl bg-[#2BB32A] py-4 px-8 border-none rounded-[64px]">
            Get Started{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </button>
          <div className="flex gap-4">
            <div>
              <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                <div className="avatar border-[2px]">
                  <div className="w-12">
                    <img src={user1} />
                  </div>
                </div>
                <div className="avatar border-[2px]">
                  <div className="w-12">
                    <img src={user2} />
                  </div>
                </div>
                <div className="avatar border-[2px]">
                  <div className="w-12">
                    <img src={user3} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-[16px] leading-6">10.2k+</h5>
              <p>Active users around the wordls</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="absolute z-50 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-[50%]"
            src={card}
            alt="card"
          />
          <span className="absolute z-10 badge badge-primary badge-lg border-none bg-[#2BB32A] w-[492px] h-[492px] rounded-[100%] -right-36"></span>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
