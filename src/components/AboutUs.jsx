import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full mx-auto p-12 grid md:grid-cols-2 md:max-w-[80%]: bg-[#161616de] rounded-md">
      <div className="flex flex-col justify-center">
        <h1 className="md:text-4xl sm:text-3xl text-2xl text-[#9747ff] font-bold mx-8 my-4">
          About us
        </h1>
        <p className="mx-8 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          provident praesentium quasi, enim animi unde vel sequi esse error
          deleniti ex accusamus consectetur id doloribus ipsum quis laborum
          iste, vero ipsa soluta architecto! Optio, excepturi adipisci! Veniam
          placeat, reprehenderit, nobis id magni doloribus fuga laborum deleniti
          error, voluptas quas iusto.
        </p>
      </div>
      <img
        className={`w-full sm:w-96 h-auto my-10 mx-auto bg-[#1b1b1b] border-solid  rounded-md $`}
        src="/assets/img/Cola.png"
        alt="cola"
      />
    </div>
  );
};

export default AboutUs;
