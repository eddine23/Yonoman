import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[108px] w-full mx-auto text-center flex flex-col justify-center">
        <ReactTyped
          className="text-[#00df9a] font-bold p-2 md:text-7xl sm:text-6xl text-7xl md:py-6"
          strings={["Yonoman", "Yonosan", "Yonodrinks"]}
          typedSpeed={10}
          backSpeed={200}
          loop
        />
        <p className="md:text-2xl sm:text-1xl text-1xl font-bold md:py-6 ">
          All of our products are unique and are only accessible through our
          business, so you’ll be facing zero direct competition.
        </p>
        <p className="md:text-2xl sm:text-xl text-gray-500 ">
          Our business also includes a coffee shop and beer café in Belgium with
          franchising in progress in the Netherlands and beyond.{" "}
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-5 mx-auto py-3 text-black">
          Our Products
        </button>
      </div>
    </div>
  );
};

export default Hero;
