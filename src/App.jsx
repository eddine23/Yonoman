import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ContactForm from "./components/Contact";
import AboutUs from "./components/AboutUs";
//import Red from "./components/Testcontact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[url(/assets/img/j.png)] bg-repeat-y pt-12 border-0	">
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
