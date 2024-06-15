import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ContactForm from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-custom pt-12 border-0">
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
