import React, { useState } from "react";

const Products = () => {
  const product = [
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "/assets/img/Cola.png",
    },
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "/assets/img/Cola.png",
    },
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "/assets/img/energys.png",
    },
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "/assets/img/devils.png",
    },
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "/assets/img/devils.png",
    },
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "/assets/img/devils.png",
    },
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "/assets/img/devils.png",
    },
    // Add more product objects here...
  ];

  const [showMore, setShowMore] = useState(
    product ? Array(product.length).fill(false) : []
  );

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

  // Add a check to handle the case when products array is empty or undefined
  if (!product || product.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="w-full bg-[#1e1e1e] p-8 sm:p-8 text-white" id="Products">
      {product.map((product, index) => (
        <div
          key={index}
          className={`max-w-[960px] mx-auto mb-16 grid md:grid-cols-2 md:max-w-[80%]: bg-[#161616] rounded-md`}
        >
          <img
            className={`w-full sm:w-96 h-auto my-10 mx-auto bg-[#EBCF5B] border-solid border-2 rounded-md ${renderImagePosition(
              index
            )}`}
            src={product.image}
            alt={product.title}
          />
          <div className="flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl text-[#EBCF5B] font-bold mx-8 my-4">
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
              className="w-[200px] rounded-md font-medium my-5 mx-auto py-3 text-white border-2 border-[#EBCF5B] active:bg-[#EBCF5B]"
              onClick={() => toggleShowMore(index)}
            >
              {showMore[index] ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
