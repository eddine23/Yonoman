import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center max-w[1240] mx-auto px-4 text-white ">
      <h1 className=" text-3xl font-bold text-[#ecf20d]">YONO</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">
          <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
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
          >
            Contact us
          </Link>
        </li>
      </ul>
      <div onClick={handelNav} className="md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-100"
        }
      >
        <h1 className=" text-3xl font-bold text-[#00df9a]">YONO</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Product</li>
          <li className="p-4 border-b border-gray-600">About us</li>
          <li className="p-4">Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
