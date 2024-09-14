import React from "react";
import Container from "../../UI/Container/Container";

const Footer = () => {
  return (
    <Container>
      <div
        style={{ backgroundColor: "#2834303D" }}
        className="w-full relative md:px-0 px-3"
      >
        <div className="main-container">
          <footer className="footer text-gray pt-10 pb-20 text-left">
            <aside className=" flex flex-col h-full justify-center">
              <img src="/src/assets/img/logo.png" alt="" />
              <p className="pt-2">
                Discover the power of our secure and
                <br /> rewarding credit cards
              </p>
            </aside>
            <nav>
              <h6 className="text-white font-bold text-[16px]">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="text-white font-bold text-[16px]">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="text-white font-bold text-[16px]">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
              <h6 className="text-white font-bold text-[16px]">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </footer>
          <footer className="footer bg-transparent text-gray px-10 py-4 ">
            <aside className="grid grid-flow-col md:grid-flow-row items-center">
              <p>Copyright 2023 DoraDesign All Rights Reserved</p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
              <div className="grid grid-flow-col gap-4">
                <p>This page uses cookies. See cookies details here </p>
              </div>
            </nav>
          </footer>
          <img
            className="w-[56px] h-[56px] absolute top-0 right-[40%] blur"
            src="/src/assets/img/Star.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
