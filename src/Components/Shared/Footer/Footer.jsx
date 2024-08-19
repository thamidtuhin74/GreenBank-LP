import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Container from "../../UI/Container/Container";
import Logo from "../../../assets/img/logo.png"


const Footer = () => {
  return (
    <div className="pt-5  text-white">
      <Container>
        <div className="text-center flex flex-col items-center pt-02">
          <img className="pb-4" src={Logo} alt="" />
          <hr className="mx-auto pb-4 w-[87px] border-[#6D95FC]" />
          <div className="flex md:flex flex-wrap gap-5 justify-center text-[#6D95FC] pb-4 tracking-[-2.5%]">
            <p>Categories</p>
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Pages</p>
            <p>Support</p>
          </div>
          <p className="pb-10 tracking-[4%] leading-[166.5%]">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
            sit amet, Neque porro elit NeDque{" "}
          </p>
          <div className="flex gap-4 justify-center text-[#6D95FC] pb-[20px]">
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
            <FaLinkedin />
            <FaTwitter />
          </div>
          <footer className="footer footer-center text-white p-4">
            <aside>
              <p>
                Copyright © {new Date().getFullYear()} Creatic Agency All rights reserved.
              </p>
            </aside>
          </footer>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
