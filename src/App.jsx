import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";
//import Red from "./components/Testcontact";
import Footer from "./components/Footer";
import Form from "./components/tst";

function App() {
  const products = [
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "./assets/img/Cola.png",
    },
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "./assets/img/Cola.png",
    },
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "../assets/img/Cola.png",
    },
    {
      title: "YONO Cola Gaza Edition",
      description:
        "Introducing the all-new refreshing and delicious cola! Not only does it satisfy your taste buds, but it also carries a greater purpose. For every cola sold, we are committed to donating 5 cents to the children of Gaza.",
      additionalText:
        "With each sip of our cola, you can make a positive impact in the lives of those who need it most. By choosing our cola, you are not just treating yourself to a delightful beverage, but also contributing to a cause that supports the well-being and future of the children in Gaza. Imagine the smiles on their faces as they receive the support and resources they deserve. Together, we can make a difference, one cola at a time! So indulge in the refreshing taste of our cola, knowing that your purchase goes beyond quenching your thirst. Join us in spreading joy and hope to the children of Gaza. Together, let's create a brighter future, sip by sip.",
      image: "./assets/img/Cola.png",
    },
    // Add more product objects here...
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <Products products={products} />
      <Contact />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
