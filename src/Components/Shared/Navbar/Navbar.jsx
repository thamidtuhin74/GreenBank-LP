/* eslint-disable no-unused-vars */
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import Container from "../../UI/Container/Container";
import Logo from "../../../assets/img/logo.png"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  const navMenu = (
    <ul className=" md:flex gap-6 lg:gap-[27px] text-base md:text-lg lg:text-[21px] font-medium items-center">
      <li className="py-2 md:py-0">
        <Link to="home" smooth={true} duration={1000} onClick={handleNavClick}>
          Home
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link to="about-us" smooth={true} duration={1000} onClick={handleNavClick}>
          About Us
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link
          to="services"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Services
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link
          to="portfolio"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Portfolio
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link to="pages" smooth={true} duration={1000} onClick={handleNavClick}>
          Pages
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link
          to="why-us"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Why Us
        </Link>
      </li>
      <li className="py-2 md:py-0">
        <Link
          to="tertimonial"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Reviews
        </Link>
      </li>
      <li className="px-6 py-3 text-sm md:text-[17px] border border-[#6D95FC] tracking-widest md:tracking-[14.5%]">
        <Link
          to="contact-us"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Contact Us
        </Link>
      </li>
      
    </ul>
  );

  return (
    <div className="navbar h-[60px] md:h-[80px] lg:h-[120px] text-white">
      <Container>
        <div className="w-full flex items-center justify-between lg:justify-start">
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} distance="sm" />
            {isOpen && (
              <div className="p-4 shadow-lg menu bg-[#da08a2] rounded-lg mt-2">
                {navMenu}
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="w-full flex  justify-center items-center content-between">
            <div className="flex flex-col text-center mr-[112px]">
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
