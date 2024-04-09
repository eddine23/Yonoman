import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center max-w[1240] mx-auto px-4 text-white">
      <h1 className=" text-3xl font-bold text-[#00df9a]">YONOMAN</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Product</li>
        <li className="p-4">About us</li>
        <li className="p-4">Contact us</li>
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
        <h1 className=" text-3xl font-bold text-[#00df9a]">YONO Home test</h1>
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
