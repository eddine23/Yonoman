import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ContactForm from "./components/Contact";
//import Red from "./components/Testcontact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
