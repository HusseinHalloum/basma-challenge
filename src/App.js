import React from "react";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolios/Portfolio";
import Service from "./components/Services/Service";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="body-container">
      <Header />
      <About />
      <Portfolio />
      <Service />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
