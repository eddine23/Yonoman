import React, { useState } from "react";
import cola from "../assets/img/Cola.png";

const Products = ({ products }) => {
  const [showMore, setShowMore] = useState(Array(products.length).fill(false));

  const toggleShowMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const renderImagePosition = (index) => {
    if (index % 2 !== 0) {
      return "order-2";
    } else {
      return "";
    }
  };
  return (
    <div className="w-full bg-[#1e1e1e] p-16 text-white">
      {products.map(
        (product, index) => (
          console.log(product.image),
          (
            <div
              key={index}
              className={`max-w-[960px] mx-auto mb-16 grid md:grid-cols-2 bg-[#161616] rounded-md`}
            >
              <img
                className={`w-[400px] my-10 mx-auto bg-white border-solid border-2 rounded-md ${renderImagePosition(
                  index
                )}`}
                src={cola}
                alt={product.title}
              />
              <div className="flex flex-col justify-center">
                <h1 className="md:text-4xl sm:text-3xl text-2xl text-[#00df9a] font-bold mx-8 my-4">
                  {product.title}
                </h1>
                <p className="mx-8">{product.description}</p>
                <p
                  className={`mx-8 overflow-hidden transition-max-height duration-1000 ease-in-out ${
                    showMore[index] ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {product.additionalText}
                </p>
                <button
                  className="bg-[#00df9a] w-[200px] rounded-md font-medium my-5 mx-auto py-3 text-black"
                  onClick={() => toggleShowMore(index)}
                >
                  {showMore[index] ? "Read less" : "Read more"}
                </button>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default Products;
