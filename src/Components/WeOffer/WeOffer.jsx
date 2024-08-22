import securityIcon from "../../assets/img/security-icon.svg";
import investIcon from "../../assets/img/invest-icon.svg";
import methodIcon from "../../assets/img/Mothod-icon.svg";
import Container from "../UI/Container/Container";
const WeOffer = () => {
  return (
    <Container>
      <div className="max-sm:px-3">
        <h1 className="text-white text-center font-bold text-[25px] md:text-[40px] leading-[57.92px]">
          What do we offer?
        </h1>
        <div className="md:pt-[64px]  max-sm:flex max-sm:flex-col gap-3 md:flex  md:gap-8">
          {/* security div */}
          <div className="flex justify-center items-center gap-4">
            <img src={securityIcon} alt="" />
            <div>
              <h1 className="text-white font-medium text-[18px] md:text-[24px] md:leading-[34.75px]">
                Security Guarantee{" "}
              </h1>
              <p className="text-[#ADB2B1] font-normal text-[16px] md:leading-[23.17px]">
                Your data and funds will be securely protected.
              </p>
            </div>
          </div>
          {/* invest div */}
          <div className="flex justify-center items-center gap-4">
            <img src={investIcon} alt="" />
            <div>
              <h1 className="text-white font-medium text-[18px] md:text-[24px] md:leading-[34.75px]">
                Security Guarantee{" "}
              </h1>
              <p className="text-[#ADB2B1] font-normal text-[16px] md:leading-[23.17px]">
                Your data and funds will be securely protected.
              </p>
            </div>
          </div>
          {/* method div */}
          <div className="flex justify-center items-center gap-4">
            <img src={methodIcon} alt="" />
            <div>
              <h1 className="text-white font-medium text-[18px] md:text-[24px] md:leading-[34.75px]">
                Security Guarantee{" "}
              </h1>
              <p className="text-[#ADB2B1] font-normal text-[16px] md:leading-[23.17px]">
                Your data and funds will be securely protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WeOffer;
