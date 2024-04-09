import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white">
      <p className="w-full mx-auto">
        Made by @Hadefbadreeddine for Yonobrand all rights reserved
      </p>
    </div>
  );
};

export default Navbar;
