import React from "react";
import Container from "../../../UI/Container/Container";

const FooterTop = () => {
  return (
    <Container>
      <div className="w-full max-w-[1920px] mx-auto md:p-0 p-5">
        <div className="main-container">
          <div className="flex flex-col md:flex-row items-center justify-between text-left relative z-1">
            <div className="footer-left md:max-w-[604px] w-full">
              <h2 className="footer-top-title font-poppins text-[48px] font-bold text-white">
                Easy Way to manage your finances
              </h2>
              <p className="text-gray mt-5 mb-8 font-regular text-[18px]">
                Easy to use mobile app that support on android and ios.
              </p>
              <div className="flex flex-row gap-10">
                <img
                  className="p-4 rounded-2xl bg-[#3D544D]"
                  src="/src/assets/img/apple-app.svg"
                  alt=""
                />
                <img
                  className="p-4 rounded-2xl bg-[#3D544D]"
                  src="/src/assets/img/anroid-app.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="Footer-right md:pb-0 pb-5">
              <img src="/src/assets/img/app.png" alt="" />
            </div>
            <div className="cricle-gradiant absolute -top-[25%] -left-[3%] "></div>
            <div className="cricle-gradiant absolute -top-[40%] -left-[10%] "></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterTop;
