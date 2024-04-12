import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white py-4">
      <p className="text-center text-sm md:text-base">
        Made by{" "}
        <span className="text-sky-400 font-bold">@Hadefbadreeddine</span>
        for Yonobrand
        <br /> &copy; All rights reserved.
      </p>
    </div>
  );
};

export default Navbar;
