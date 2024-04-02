import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w[1240] mx-auto px-4 text-white">
      <h1 className=" text-3xl font-bold text-[#00df9a]">YONO</h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Product</li>
        <li className="p-4">About us</li>
        <li className="p-4">Contact us</li>
      </ul>
    </div>
  );
};

export default Navbar;
