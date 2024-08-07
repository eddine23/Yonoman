import React, { useState } from "react";

const Products = () => {
  const products = [
    {
      title: "YONO Cola Gaza Edition",
      qua: "20cl/33cl",
      description:
        "Introducing the all-new refreshing and delicious YONO cola: Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, a donation will be made to the children of Gaza.sluggish, mentally foggy, and emotionally disconnected.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you choose a 'Product of Peace'. you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, together we can rebuild, together we stand united against violence.  So, indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      smallImages: [
        "/assets/img/c-s-1.jpg",
        "/assets/img/c-s-2.jpg",
        "/assets/img/c-s-3.jpg",
        "/assets/img/c-s-4.jpg",
      ],
      largeImages: [
        "/assets/img/c-l-1.jpg",
        "/assets/img/c-l-2.jpg",
        "/assets/img/c-l-3.jpg",
        "/assets/img/c-l-4.jpg",
      ],
    },
    {
      title: "YONO ICE TEAS",
      qua: "20cl/33cl",
      description:
        "Introducing YONO Ice Teas, the refreshing and invigorating beverages that will transport you to a world of pure bliss. Made with the finest tea leaves and infused with natural flavours.",
      additionalText:
        "'YONO' ice teas are the 'YONO' ice teas offer a delightful range of options to satisfy your cravings. Choose from our sparkling collection for a fizzy and effervescent experience that will awaken your taste buds with every sip. Or opt for our non-sparkling varieties, perfect for those who prefer a smooth and soothing refreshment.Whichever you choose, 'YONO' ice teas are crafted to perfection, delivering a harmonious blend of flavours that will leave you feeling rejuvenated and revitalized. Whether you're lounging by the pool, enjoying a picnic in the park, or simply need a moment of tranquillity, perfect companion to keep you cool and refreshed all day long. Dive into the world of YONO and discover the pure joy of sipping on our exquisite ice teas. Indulge, savour, and let the flavours transport you to a state of pure bliss. Cheers to the perfect sip!",
      smallImages: [
        "/assets/img/i-s-1.jpg",
        "/assets/img/i-s-2.jpg",
        "/assets/img/i-s-3.jpg",
        "/assets/img/i-s-4.jpg",
        "/assets/img/i-s-5.jpg",
        "/assets/img/i-s-6.jpg",
        "/assets/img/i-s-7.jpg",
        "/assets/img/i-s-8.jpg",
      ],
      largeImages: [
        "/assets/img/i-l-1.jpg",
        "/assets/img/i-l-2.jpg",
        "/assets/img/i-l-3.jpg",
        "/assets/img/i-l-4.jpg",
        "/assets/img/i-l-5.jpg",
        "/assets/img/i-l-6.jpg",
        "/assets/img/i-l-7.jpg",
        "/assets/img/i-l-8.jpg",
      ],
    },
    {
      title: "YONO Mocktails:",
      qua: "20cl/33cl",
      description:
        "Introducing the all-new range of YONO Mocktails: Experience the refreshing and vibrant flavours of YONO, the perfect companion for those looking for a non-alcoholic, yet exciting beverage option. With a variety of delicious flavours to choose from.",
      additionalText:
        "YONO Mocktails are the ultimate choice for anyone seeking a cool, unique, and refreshing drink. Our slogan, 'Revitalize Your Spirit,' embodies the essence of YONO mocktails. It's an invitation to embrace the moment, relax, and enjoy life's simple pleasures. Whether you're unwinding after a long day, socializing with friends, or simply in need of a refreshing pick-me-up, YONO mocktails provide a delightful and satisfying experience. Indulge in the fruity goodness of YONO mocktails and let the flavours transport you to a world of pure enjoyment. With each sip, you'll feel the invigorating sensation of coolness, revitalizing your senses and leaving you refreshed. Unleash the flavour, skip the hangover – Dive into our mocktail oasis!!",
      smallImages: [
        "/assets/img/m-s-1.jpg",
        "/assets/img/m-s-2.jpg",
        "/assets/img/m-s-3.jpg",
        "/assets/img/m-s-4.jpg",
        "/assets/img/m-s-5.jpg",
        "/assets/img/m-s-6.jpg",
      ],
      largeImages: [
        "/assets/img/m-l-1.jpg",
        "/assets/img/m-l-2.jpg",
        "/assets/img/m-l-3.jpg",
        "/assets/img/m-l-4.jpg",
        "/assets/img/m-l-5.jpg",
        "/assets/img/m-l-6.jpg",
      ],
    },
    {
      title: "YONO-MAN ENERGY",
      qua: "20cl/33cl",
      description:
        "Lack of energy drains vitality from every aspect of life, leaving individuals feeling physically sluggish, mentally foggy, and emotionally disconnected.",
      additionalText:
        "Well, our YONO family got the solution for you: Introducing our exclusive Yono energy drink, we will energize your day with the invigorating power of YONO-MAN, the ultimate energy booster designed to fuel your adventures and elevate your performance. With its unique blend of natural ingredients, vitamins and refreshing taste. YONO-MAN is the perfect companion for those seeking an intense burst of energy. Our slogan, 'You're the Man' embodies the spirit of YONO-MAN. It's a call to action for individuals who strive to seize the day, push their limits, and embrace their inner greatness. YONO-MAN empowers you to take charge, conquer challenges, and be the best version of yourself. Whether you're an athlete, a student burning the midnight oil, or someone simply looking for an extra kick to power through your day, YONO-MAN is here to energize and inspire you. So, grab a can of YONO-MAN, unleash your potential, and show the world that 'You're the man'! NOW YONO-MAN WILL ENERGISE YOUR DAY ;).",
      smallImages: [
        "/assets/img/e-s-1.jpg",
        "/assets/img/e-s-2.jpg",
        "/assets/img/e-s-3.jpg",
        "/assets/img/e-s-4.jpg",
      ],
      largeImages: [
        "/assets/img/e-l-1.jpg",
        "/assets/img/e-l-2.jpg",
        "/assets/img/e-l-3.jpg",
        "/assets/img/e-l-4.jpg",
      ],
    },
  ];

  const [showMore, setShowMore] = useState(
    products ? Array(products.length).fill(false) : []
  );
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  const toggleShowMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const handleImageClick = (imageIndex, productIndex) => {
    setFullscreenImage(products[productIndex].largeImages[imageIndex]);
    setCurrentImageIndex(imageIndex);
    setCurrentProductIndex(productIndex);
    setZoomLevel(1);
  };

  const handleNextImage = () => {
    const newIndex =
      (currentImageIndex + 1) %
      products[currentProductIndex].largeImages.length;
    setFullscreenImage(products[currentProductIndex].largeImages[newIndex]);
    setCurrentImageIndex(newIndex);
    setZoomLevel(1);
  };

  const handlePrevImage = () => {
    const newIndex =
      (currentImageIndex -
        1 +
        products[currentProductIndex].largeImages.length) %
      products[currentProductIndex].largeImages.length;
    setFullscreenImage(products[currentProductIndex].largeImages[newIndex]);
    setCurrentImageIndex(newIndex);
    setZoomLevel(1);
  };

  const toggleZoom = () => {
    setZoomLevel((prevZoom) =>
      prevZoom === 1 ? 1.5 : prevZoom === 1.5 ? 2 : 1
    );
  };

  const closeFullscreen = (e) => {
    if (e.target === e.currentTarget) {
      setFullscreenImage(null);
      setZoomLevel(1);
    }
  };

  const handleThumbnailScroll = (direction, productIndex) => {
    const maxStartIndex = Math.max(
      0,
      products[productIndex].smallImages.length - 4
    );
    setStartIndex((prevIndex) => {
      if (direction === "left") {
        return Math.max(0, prevIndex - 1);
      } else {
        return Math.min(maxStartIndex, prevIndex + 1);
      }
    });
  };

  return (
    <div className="w-full p-8 sm:p-8 text-white" id="Products">
      {products.map((product, index) => (
        <div
          key={index}
          className={`max-w-[960px] mx-auto mb-16 grid md:grid-cols-3 bg-[#161616] rounded-md`}
        >
          <div
            className={`col-span-2 flex flex-col justify-center p-8 ${
              index % 2 === 0 ? "order-1" : "order-2"
            }`}
          >
            <div className="flex justify-between border-b-4 py-2">
              <p className="text-white font-bold">{product.title}</p>
              <h1 className="text-white font-bold">{product.qua}</h1>
            </div>
            <p className="mt-4">{product.description}</p>
            <p
              className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${
                showMore[index] ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              {product.additionalText}
            </p>
            <button
              className="w-[120px] rounded-md font-medium mt-5 border-2 border-[#9747ff] active:bg-[#a064ee]"
              onClick={() => toggleShowMore(index)}
            >
              {showMore[index] ? "Read less" : "Read more"}
            </button>
          </div>
          <div
            className={`relative p-8 flex flex-col justify-center ${
              index % 2 === 0 ? "order-2" : "order-1"
            }`}
          >
            <img
              className="w-[100%] h-auto bg-[#1b1b1b] border-solid rounded-md cursor-pointer"
              src={product.smallImages[currentImageIndex]}
              alt={product.title}
              onClick={() => handleImageClick(currentImageIndex, index)}
            />
            <div className="flex justify-center mt-4 relative">
              {startIndex > 0 && (
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white"
                  onClick={() => handleThumbnailScroll("left", index)}
                >
                  &#8249;
                </button>
              )}
              {product.smallImages
                .slice(startIndex, startIndex + 4)
                .map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    className={`w-12 h-12 m-1 cursor-pointer border-2 ${
                      currentImageIndex === startIndex + imgIndex &&
                      currentProductIndex === index
                        ? "border-[#9747ff]"
                        : "border-transparent"
                    }`}
                    src={image}
                    alt={`${product.title} ${startIndex + imgIndex}`}
                    onClick={() =>
                      handleImageClick(startIndex + imgIndex, index)
                    }
                  />
                ))}
              {startIndex < product.smallImages.length - 4 && (
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"
                  onClick={() => handleThumbnailScroll("right", index)}
                >
                  &#8250;
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeFullscreen}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeFullscreen}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-2xl"
            onClick={handlePrevImage}
          >
            &#8249;
          </button>
          <img
            className={`max-w-full max-h-full transition-transform duration-300`}
            style={{
              transform: `scale(${zoomLevel})`,
              cursor: zoomLevel > 1 ? "move" : "zoom-in",
            }}
            src={fullscreenImage}
            alt="Fullscreen"
            onClick={(e) => {
              e.stopPropagation();
              toggleZoom();
            }}
          />
          <button
            className="absolute right-4 text-white text-2xl"
            onClick={handleNextImage}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
