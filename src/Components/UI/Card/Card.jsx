import card_icon1 from "../../../assets/img/card-icon/cardicon1.png";
import card_icon2 from "../../../assets/img/card-icon/cardicon2.png";
import card_icon3 from "../../../assets/img/card-icon/cardicon3.png";

const Card = () => {
  return (
    <div className="relative">
      <div className=" w-[521.3px] h-[318.19px] rounded-[32px] ps-[62.64px] pr-[43.1px] pt-[50.7px] pb-[43.94px] backdrop-blur-sm bg-gradient-to-l backdrop-filter border shadow-lg absolute from-[#978c8c62] to-[#ffffff6f]">
        <div className="flex justify-between">
          <img
            className="rotate-[-15deg] w-[58.37px] h-[34.82px]"
            src={card_icon1}
            alt=""
          />
          <img
            className="rotate-[-15deg] w-[25.32px] h-[46.43px]"
            src={card_icon2}
            alt=""
          />
        </div>
        <p className="font-semibold text-[14px] leading-[20.27px] pt-[33.19px] pb-[15.19px]">
          Credit Card No.
        </p>
        <div className="flex gap-5 font-bold text-[32px] leading-[24px]">
          <span>1602</span>
          <span>0911</span>
          <span>2019</span>
          <span>2021</span>
        </div>
        <div className="flex gap-[111.71px] pt-[45px] text-[14px] leading-[20.27px]">
          <span>Name</span>
          <span>Exp.</span>
        </div>
        <div className="flex gap-[37.06px] pt-[15px] text-[12px] leading-[17.38px]">
          <span>REHAN RAIHAN</span>
          <span>09/32</span>
        </div>
        <img
          className="absolute right-[7%] bottom-[12%] rotate-[-15deg] w-[58.43px] h-[46.43px]"
          src={card_icon3}
          alt=""
        />
      </div>
      {/* <span className="absolute z-0 blur-[10px] bg-[#2ab32acc] shadow-lg border-none shadow-[#e1ece1]  badge badge-lg w-[220px] h-[220px] md:w-[420px] lg:w-[420px] md:h-[420px] lg:h-[420px] rounded-[100%] -top-[70px] left-[200px]"></span> */}
    </div>
  );
};

export default Card;
