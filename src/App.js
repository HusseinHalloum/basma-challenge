import React, {useState} from "react";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolios/Portfolio";
import Service from "./components/Services/Service";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const onClickSwitcher = () => {
    setIsEnglish(!isEnglish);
  }
  return (
    <div className="body-container" dir={isEnglish ? 'ltr' : 'rtl'}>
      <Header isEnglish={isEnglish} onClickSwitcher={onClickSwitcher}/>
      <About />
      <Portfolio />
      <Service />
      <Pricing />
      <Contact />
      <Footer isEnglish={isEnglish}/>
    </div>
  );
};

export default App;
