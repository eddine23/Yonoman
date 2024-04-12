import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white mb-12" id="Home">
      <div className="max-w-[800px] mt-[108px] w-full mx-auto text-center flex flex-col justify-center">
        <ReactTyped
          className="text-[#EBCF5B] lg:text-7xl md:text-5xl sm:text-3xl  text-3xl font-bold p-2  "
          strings={["Yonoman", "Yonosan", "Yonodrinks"]}
          typedSpeed={10}
          backSpeed={200}
          loop
        />
        <p className="lg:text-3xl md:text-xl sm:text-lg  text-lg px-12 mx-auto">
          All of our products are unique and are only accessible through our
          business, so you’ll be facing zero direct competition.
        </p>
        <p className="lg:text-3xl md:text-xl sm:text-lg  text-lg text-gray-500 max-w-[600px] px-12 mx-auto">
          Our business also includes a coffee shop and beer café in Belgium with
          franchising in progress in the Netherlands and beyond.
        </p>
      </div>
    </div>
  );
};

export default Hero;
