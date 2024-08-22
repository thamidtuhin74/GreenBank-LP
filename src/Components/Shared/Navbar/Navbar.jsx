/* eslint-disable no-unused-vars */
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import Container from "../../UI/Container/Container";
import Logo from "../../../assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  const navMenu = (
    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-40 pb-6 md:pb-0">
      <ul className=" md:flex gap-4 md:gap-[27px] lg:gap-[27px] text-base md:text-lg lg:text-[21px] font-medium items-center">
        <li className="font-medium text-[16px] leading-[23.17px]">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Why Us
          </Link>
        </li>
        <li className="font-medium text-[16px] leading-[23.17px]">
          <Link
            to="about-us"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Services
          </Link>
        </li>
        <li className="font-medium text-[16px] leading-[23.17px]">
          <Link
            to="services"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Our Process
          </Link>
        </li>
        <li className="font-medium text-[16px] leading-[23.17px]">
          <Link
            to="portfolio"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            Payments
          </Link>
        </li>
        <li className="font-medium text-[16px] leading-[23.17px]">
          <Link
            to="pages"
            smooth={true}
            duration={1000}
            onClick={handleNavClick}
          >
            FAQs
          </Link>
        </li>
      </ul>

      <button className="py-1 px-3 md:px-8 lg:px-8 md:py-3 lg:py-3 text-sm md:text-[16px] lg:text-[16px] border-2 border-[#2BB32A] text-[#2BB32A] font-bold md:leading-6 lg:leading-6 rounded-[64px] mr-">
        Contact
      </button>
    </div>
  );

  return (
    <div className="navbar h-[60px] md:h-[80px] lg:h-[120px] text-white">
      <Container>
        <div className="w-full flex items-center justify-between lg:justify-start">
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden relative">
            <Hamburger toggled={isOpen} toggle={setOpen} distance="sm" />
            {isOpen && (
              <div className="absolute z-50 p-3 shadow-green-light menu bg-[#1a301a] shadow-md rounded-lg mt-2">
                {navMenu}
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="w-full flex  justify-center items-center content-between">
            <div className="flex flex-col text-center md:mr-[112px] lg:mr-[112px]">
              <img src={Logo} alt="logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex ml-auto shrink-0">{navMenu}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
