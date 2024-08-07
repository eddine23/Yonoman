import React, { useState } from "react";

const Products = () => {
  const products = [
    {
      title: "YONO Cola Gaza Edition",
      qua: "20cl/33cl",
      description:
        "Introducing the all-new refreshing and delicious YONO cola: Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, a donation will be made to the children of Gaza.sluggish, mentally foggy, and emotionally disconnected.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you choose a ‘Product of Peace’. you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, together we can rebuild, together we stand united against violence.  So, indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      images: [
        "/assets/img/e2.jpg",
        "/assets/img/e1.jpg",
        "/assets/img/e3.jpg",
        "/assets/img/e4.jpg",
      ],
    },
    {
      title: "YONO ICE TEAS",
      qua: "20cl/33cl",
      description:
        "Introducing YONO Ice Teas, the refreshing and invigorating beverages that will transport you to a world of pure bliss. Made with the finest tea leaves and infused with natural flavours.",
      additionalText:
        "'YONO' ice teas are the 'YONO' ice teas offer a delightful range of options to satisfy your cravings. Choose from our sparkling collection for a fizzy and effervescent experience that will awaken your taste buds with every sip. Or opt for our non-sparkling varieties, perfect for those who prefer a smooth and soothing refreshment.Whichever you choose, 'YONO' ice teas are crafted to perfection, delivering a harmonious blend of flavours that will leave you feeling rejuvenated and revitalized. Whether you're lounging by the pool, enjoying a picnic in the park, or simply need a moment of tranquillity, perfect companion to keep you cool and refreshed all day long. Dive into the world of YONO and discover the pure joy of sipping on our exquisite ice teas. Indulge, savour, and let the flavours transport you to a state of pure bliss. Cheers to the perfect sip!",
      images: [
        "/assets/img/c1.jpg",
        "/assets/img/c2.jpg",
        "/assets/img/c3.jpg",
        "/assets/img/c4.jpg",
      ],
    },
    // Add more products as needed...
  ];

  const [showMore, setShowMore] = useState(
    products ? Array(products.length).fill(false) : []
  );
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleShowMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const handleImageClick = (imageIndex, productIndex) => {
    setFullscreenImage(products[productIndex].images[imageIndex]);
    setCurrentImageIndex(imageIndex);
  };

  const handleNextImage = (productIndex) => {
    const newIndex =
      (currentImageIndex + 1) % products[productIndex].images.length;
    setFullscreenImage(products[productIndex].images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handlePrevImage = (productIndex) => {
    const newIndex =
      (currentImageIndex - 1 + products[productIndex].images.length) %
      products[productIndex].images.length;
    setFullscreenImage(products[productIndex].images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="w-full p-8 sm:p-8 text-white" id="Products">
      {products.map((product, index) => (
        <div
          key={index}
          className={`max-w-[960px] mx-auto mb-16 grid md:grid-cols-3 bg-[#161616] rounded-md`}
        >
          <div className="col-span-2 flex flex-col p-8">
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
          <div className="relative px-8 pb-8">
            <img
              className="w-full h-auto mx-auto m-8 bg-[#1b1b1b] border-solid rounded-md cursor-pointer"
              src={product.images[0]}
              alt={product.title}
              onClick={() => handleImageClick(0, index)}
            />
            <div className="flex justify-center mt-4">
              {product.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  className={`w-12 h-12 m-1 cursor-pointer border-2 ${
                    currentImageIndex === imgIndex
                      ? "border-[#9747ff]"
                      : "border-transparent"
                  }`}
                  src={image}
                  alt={`${product.title} ${imgIndex}`}
                  onClick={() => handleImageClick(imgIndex, index)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage(currentImageIndex);
            }}
          >
            &lt;
          </button>
          <img
            className="max-w-full max-h-full"
            src={fullscreenImage}
            alt="Fullscreen"
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage(currentImageIndex);
            }}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
