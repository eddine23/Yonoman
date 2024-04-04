import React, { useState } from "react";
import cola from "../assets/img/Cola.png";

const Products = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container">
      <div className="w-full bg-[#1e1e1e] pt-16 px-4 text-white">
        <div className="max-w-[960px] mx-auto grid md:grid-cols-2 bg-[#161616] rounded-md">
          <img
            className="w-[400px] my-10 mx-auto bg-white border-solid border-2 rounded-md"
            src={cola}
            alt="YONO Cola"
          />
          <div className="flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl text-[#00df9a] font-bold m-8">
              YONO Cola Gaza Edition
            </h1>
            <p className="mr-8">
              Introducing the all-new refreshing and delicious cola! Not only
              does it satisfy your taste buds, but it also carries a greater
              purpose. For every cola sold, we are committed to donating 5 cents
              to the children of Gaza.
            </p>
            <p
              className={`mr-8 overflow-hidden transition-max-height duration-1000 ease-in-out ${
                showMore ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              With each sip of our cola, you can make a positive impact in the
              lives of those who need it most. By choosing our cola, you are not
              just treating yourself to a delightful beverage, but also
              contributing to a cause that supports the well-being and future of
              the children in Gaza. Imagine the smiles on their faces as they
              receive the support and resources they deserve. Together, we can
              make a difference, one cola at a time! So indulge in the
              refreshing taste of our cola, knowing that your purchase goes
              beyond quenching your thirst. Join us in spreading joy and hope to
              the children of Gaza. Together, let's create a brighter future,
              sip by sip.
            </p>
            <button
              className="bg-[#00df9a] w-[200px] rounded-md font-medium my-5 mx-auto py-3 text-black"
              onClick={toggleShowMore}
            >
              {showMore ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#1e1e1e] py-16 px-4 text-white">
        <div className="max-w-[960px] mx-auto grid md:grid-cols-2 bg-[#161616] rounded-md">
          <div className="flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl text-[#00df9a] font-bold m-8">
              YONO Cola Gaza Edition
            </h1>
            <p className="ml-8">
              Introducing the all-new refreshing and delicious cola! Not only
              does it satisfy your taste buds, but it also carries a greater
              purpose. For every cola sold, we are committed to donating 5 cents
              to the children of Gaza.
            </p>
            <p
              className={`ml-8 overflow-hidden transition-max-height duration-1000 ease-in-out ${
                showMore ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              With each sip of our cola, you can make a positive impact in the
              lives of those who need it most. By choosing our cola, you are not
              just treating yourself to a delightful beverage, but also
              contributing to a cause that supports the well-being and future of
              the children in Gaza. Imagine the smiles on their faces as they
              receive the support and resources they deserve. Together, we can
              make a difference, one cola at a time! So indulge in the
              refreshing taste of our cola, knowing that your purchase goes
              beyond quenching your thirst. Join us in spreading joy and hope to
              the children of Gaza. Together, let's create a brighter future,
              sip by sip.
            </p>
            <button
              className="bg-[#00df9a] w-[200px] rounded-md font-medium my-5 mx-auto py-3 text-black"
              onClick={toggleShowMore}
            >
              {showMore ? "Read less" : "Read more"}
            </button>
          </div>
          <img
            className="w-[400px] my-10 mx-auto bg-white border-solid border-2 rounded-md"
            src={cola}
            alt="YONO Cola"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
