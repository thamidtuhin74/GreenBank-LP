import card_icon1 from "../../../assets/img/card-icon/cardicon1.png";
import card_icon2 from "../../../assets/img/card-icon/cardicon2.png";
import card_icon3 from "../../../assets/img/card-icon/cardicon3.png";

const Card = () => {
  return (
    <div className="relative">
      <div className="w-[230px] h-[150px] md:w-[521.3px] md:h-[318.19px] rounded-[32px] p-5 md:ps-[62.64px] md:pr-[43.1px] md:pt-[50.7px] md:pb-[43.94px] backdrop-blur-sm bg-gradient-to-l backdrop-filter border shadow-lg absolute from-[#978c8c62] to-[#ffffff6f]">
        <div className="flex justify-between">
          <img
            className="rotate-[-15deg] w-3 h-3 md:w-[58.37px] md:h-[34.82px]"
            src={card_icon1}
            alt=""
          />
          <img
            className="rotate-[-15deg] w-3 h-4 md:w-[25.32px] md:h-[46.43px]"
            src={card_icon2}
            alt=""
          />
        </div>
        <p className="font-semibold text-[8px] md:text-[14px] leading-[20.27px] pt-2 pb-1 md:pt-[33.19px] md:pb-[15.19px]">
          Credit Card No.
        </p>
        <div className="flex gap-3 md:gap-5 font-bold text-[12px] md:text-[32px] md:leading-[24px]">
          <span>1602</span>
          <span>0911</span>
          <span>2019</span>
          <span>2021</span>
        </div>
        <div className="flex gap-14 md:gap-[111.71px] pt-3 md:pt-[45px] text-[8px] md:text-[14px] md:leading-[20.27px]">
          <span>Name</span>
          <span>Exp.</span>
        </div>
        <div className="flex gap-[17px] md:gap-[57px] text-start pt-1 md:pt-[15px] text-[8px] md:text-[12px] leading-[17.38px]">
          <span>REHAN RAIHAN</span>
          <span>09/32</span>
        </div>
        <img
          className="absolute right-[7%] bottom-[12%] rotate-[-15deg] w-7 h-5 md:w-[58.43px] md:h-[46.43px]"
          src={card_icon3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
