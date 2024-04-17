import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const hideNav = () => {
    setNav(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-black">
      <div className="flex justify-between items-center max-w-[1240] mx-auto px-4 text-white">
        <h1 className="text-3xl font-bold text-[#ff477a]">YONO</h1>

        <div className="md:hidden">
          <AiOutlineMenu
            className="fill-[#ecf20d]"
            size={20}
            onClick={toggleNav}
          />
        </div>

        <ul className="hidden md:flex">
          <li className="p-4 cursor-pointer">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={hideNav}
            >
              Home
            </Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link
              to="Products"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={hideNav}
            >
              Products
            </Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link
              to="About us"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={hideNav}
            >
              About us
            </Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link
              to="Contact us"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={hideNav}
            >
              Contact us
            </Link>
          </li>
        </ul>

        {nav && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full z-20 bg-black bg-opacity-75">
            <div className="flex flex-col items-center justify-center h-full">
              <AiOutlineClose
                size={20}
                className="absolute top-4 right-4 cursor-pointer fill-[#ecf20d] "
                onClick={toggleNav}
              />
              <ul className="p-4 uppercase">
                <li className="p-4 cursor-pointer">
                  <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={hideNav}
                  >
                    Home
                  </Link>
                </li>
                <li className="p-4 cursor-pointer">
                  <Link
                    to="Products"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={hideNav}
                  >
                    Products
                  </Link>
                </li>
                <li className="p-4 cursor-pointer">
                  <Link
                    to="About us"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={hideNav}
                  >
                    About us
                  </Link>
                </li>
                <li className="p-4 cursor-pointer">
                  <Link
                    to="Contact us"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={hideNav}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
