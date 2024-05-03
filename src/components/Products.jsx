import React, { useState } from "react";
import frame from "../../public/assets/img/Frame.png";

const Products = () => {
  const product = [
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious YONO cola: Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, a donation will be made to the children of Gaza.sluggish, mentally foggy, and emotionally disconnected.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you choose a ‘Product of Peace’. you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, together we can rebuild, together we stand united against violence.  So, indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "/assets/img/Cola.png",
    },
    {
      title: "YONO ICE TEAS",
      description:
        "Introducing YONO Ice Teas, the refreshing and invigorating beverages that will transport you to a world of pure bliss. Made with the finest tea leaves and infused with natural flavours.",
      additionalText:
        "'YONO' ice teas are the 'YONO' ice teas offer a delightful range of options to satisfy your cravings. Choose from our sparkling collection for a fizzy and effervescent experience that will awaken your taste buds with every sip. Or opt for our non-sparkling varieties, perfect for those who prefer a smooth and soothing refreshment.Whichever you choose, 'YONO' ice teas are crafted to perfection, delivering a harmonious blend of flavours that will leave you feeling rejuvenated and revitalized. Whether you're lounging by the pool, enjoying a picnic in the park, or simply need a moment of tranquillity, perfect companion to keep you cool and refreshed all day long. Dive into the world of YONO and discover the pure joy of sipping on our exquisite ice teas. Indulge, savour, and let the flavours transport you to a state of pure bliss. Cheers to the perfect sip!",
      image: "/assets/img/Cola.png",
    },
    {
      title: "YONO Mocktails:",
      description:
        "Introducing the all-new range of YONO Mocktails: Experience the refreshing and vibrant flavours of YONO, the perfect companion for those looking for a non-alcoholic, yet exciting beverage option. With a variety of delicious flavours to choose from.",
      additionalText:
        "YONO Mocktails are the ultimate choice for anyone seeking a cool, unique, and refreshing drink. Our slogan, 'Revitalize Your Spirit,' embodies the essence of YONO mocktails. It's an invitation to embrace the moment, relax, and enjoy life's simple pleasures. Whether you're unwinding after a long day, socializing with friends, or simply in need of a refreshing pick-me-up, YONO mocktails provide a delightful and satisfying experience. Indulge in the fruity goodness of YONO mocktails and let the flavours transport you to a world of pure enjoyment. With each sip, you'll feel the invigorating sensation of coolness, revitalizing your senses and leaving you refreshed. Unleash the flavour, skip the hangover – Dive into our mocktail oasis!!",
      image: "/assets/img/energys.png",
    },
    {
      title: "YONO-MAN ENERGY",
      description:
        "Lack of energy drains vitality from every aspect of life, leaving individuals feeling physically sluggish, mentally foggy, and emotionally disconnected.",
      additionalText:
        "Well, our YONO family got the solution for you: Introducing our exclusive Yono energy drink, we will energize your day with the invigorating power of YONO-MAN, the ultimate energy booster designed to fuel your adventures and elevate your performance. With its unique blend of natural ingredients, vitamins and refreshing taste. YONO-MAN is the perfect companion for those seeking an intense burst of energy. Our slogan, 'You’re the Man' embodies the spirit of YONO-MAN. It's a call to action for individuals who strive to seize the day, push their limits, and embrace their inner greatness. YONO-MAN empowers you to take charge, conquer challenges, and be the best version of yourself. Whether you're an athlete, a student burning the midnight oil, or someone simply looking for an extra kick to power through your day, YONO-MANis here to energize and inspire you. So, grab a can of YONO-MAN, unleash your potential, and show the world that 'You’re the man'! NOW YONO-MAN WILL ENERGISE YOUR DAY ;).",
      image: "/assets/img/devils.png",
    },
    // {
    //   // Add more product objects here...
    // },
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
    <div className="w-full p-8 sm:p-8 text-white" id="Products">
      {product.map((product, index) => (
        <div
          key={index}
          className={`max-w-[960px] mx-auto mb-16 grid md:grid-cols-2 md:max-w-[80%]: bg-[#161616] rounded-md`}
        >
          <img
            className={`w-full sm:w-96 h-auto my-10 mx-auto bg-[#1b1b1b] border-solid  rounded-md ${renderImagePosition(
              index
            )}`}
            src={product.image}
            alt={product.title}
          />
          <div className="flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl text-[#9747ff] font-bold mx-8 my-4">
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
