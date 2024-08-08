import React, { useState, useRef, useEffect } from "react";

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
  const [currentImageIndices, setCurrentImageIndices] = useState(
    Array(products.length).fill(0)
  );
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(Array(products.length).fill(0));
  const [touchStart, setTouchStart] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const fullscreenImageRef = useRef(null);

  useEffect(() => {
    if (!fullscreenImage) {
      setZoomLevel(1);
      setDragOffset({ x: 0, y: 0 });
    }
  }, [fullscreenImage]);

  const toggleShowMore = (index) => {
    setShowMore((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  const handleImageClick = (imageIndex, productIndex) => {
    setFullscreenImage(products[productIndex].largeImages[imageIndex]);
    setCurrentImageIndices((prev) =>
      prev.map((item, i) => (i === productIndex ? imageIndex : item))
    );
    setCurrentProductIndex(productIndex);
  };

  const handleNextImage = () => {
    setCurrentImageIndices((prev) =>
      prev.map((item, i) => {
        if (i === currentProductIndex) {
          return (item + 1) % products[i].largeImages.length;
        }
        return item;
      })
    );
    setFullscreenImage(
      products[currentProductIndex].largeImages[
        (currentImageIndices[currentProductIndex] + 1) %
          products[currentProductIndex].largeImages.length
      ]
    );
    resetZoom();
  };

  const handlePrevImage = () => {
    setCurrentImageIndices((prev) =>
      prev.map((item, i) => {
        if (i === currentProductIndex) {
          return (
            (item - 1 + products[i].largeImages.length) %
            products[i].largeImages.length
          );
        }
        return item;
      })
    );
    setFullscreenImage(
      products[currentProductIndex].largeImages[
        (currentImageIndices[currentProductIndex] -
          1 +
          products[currentProductIndex].largeImages.length) %
          products[currentProductIndex].largeImages.length
      ]
    );
    resetZoom();
  };

  const closeFullscreen = (e) => {
    if (e.target === e.currentTarget) {
      setFullscreenImage(null);
    }
  };

  const handleThumbnailScroll = (direction, productIndex) => {
    setStartIndex((prev) =>
      prev.map((item, i) => {
        if (i === productIndex) {
          const maxStartIndex = Math.max(0, products[i].smallImages.length - 4);
          return direction === "left"
            ? Math.max(0, item - 1)
            : Math.min(maxStartIndex, item + 1);
        }
        return item;
      })
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) handleNextImage();
    else if (diff < -50) handlePrevImage();
    setTouchStart(null);
  };

  const handleZoom = (e) => {
    e.preventDefault();
    if (zoomLevel === 1) {
      setZoomLevel(2);
    } else if (zoomLevel === 2) {
      setZoomLevel(3);
    } else {
      resetZoom();
    }
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setDragOffset({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setDragStart({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (zoomLevel > 1 && e.buttons === 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setDragOffset({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragStart({ x: 0, y: 0 });
  };

  return (
    <div className="w-full p-8 sm:p-8 text-white" id="Products">
      {products.map((product, index) => (
        <div
          key={index}
          className={`max-w-[960px] mx-auto mb-16 flex flex-col md:grid md:grid-cols-3 bg-[#161616] rounded-md`}
        >
          <div
            className={`md:col-span-2 flex flex-col justify-center p-8 order-2 md:order-none ${
              index % 2 === 0 ? "md:order-1" : "md:order-2"
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
            className={`flex justify-center items-center p-8 order-1 md:order-none ${
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            }`}
          >
            <div className="max-w-[300px] w-full">
              <img
                className="w-full h-auto bg-[#1b1b1b] border-solid rounded-md cursor-pointer"
                src={product.smallImages[currentImageIndices[index]]}
                alt={product.title}
                onClick={() =>
                  handleImageClick(currentImageIndices[index], index)
                }
              />
              <div className="flex justify-center mt-4 relative">
                {startIndex[index] > 0 && (
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white"
                    onClick={() => handleThumbnailScroll("left", index)}
                  >
                    &#8249;
                  </button>
                )}
                <div className="flex justify-center">
                  {product.smallImages
                    .slice(startIndex[index], startIndex[index] + 4)
                    .map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        className={`w-12 h-12 m-1 cursor-pointer border-2 ${
                          currentImageIndices[index] ===
                          startIndex[index] + imgIndex
                            ? "border-[#9747ff]"
                            : "border-transparent"
                        }`}
                        src={image}
                        alt={`${product.title} ${startIndex[index] + imgIndex}`}
                        onClick={() =>
                          handleImageClick(startIndex[index] + imgIndex, index)
                        }
                      />
                    ))}
                </div>
                {startIndex[index] < product.smallImages.length - 4 && (
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
        </div>
      ))}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50"
          onClick={closeFullscreen}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeFullscreen}
          >
            &times;
          </button>
          <div className="relative w-full h-3/4 overflow-hidden">
            <img
              ref={fullscreenImageRef}
              className="w-full h-full object-contain transition-transform duration-200 ease-in-out"
              style={{
                transform: `scale(${zoomLevel}) translate(${
                  dragOffset.x / zoomLevel
                }px, ${dragOffset.y / zoomLevel}px)`,
                cursor: zoomLevel > 1 ? "move" : "zoom-in",
              }}
              src={fullscreenImage}
              alt="Fullscreen"
              onClick={handleZoom}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            />
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black bg-white bg-opacity-50 p-2 rounded-full"
              onClick={handlePrevImage}
            >
              &#8249;
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black bg-white bg-opacity-50 p-2 rounded-full"
              onClick={handleNextImage}
            >
              &#8250;
            </button>
          </div>
          <div className="flex justify-center mt-4 overflow-x-auto w-full">
            {products[currentProductIndex].smallImages.map(
              (image, imgIndex) => (
                <img
                  key={imgIndex}
                  className={`w-16 h-16 m-1 cursor-pointer border-2 ${
                    currentImageIndices[currentProductIndex] === imgIndex
                      ? "border-[#9747ff]"
                      : "border-transparent"
                  }`}
                  src={image}
                  alt={`Thumbnail ${imgIndex}`}
                  onClick={() =>
                    handleImageClick(imgIndex, currentProductIndex)
                  }
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
