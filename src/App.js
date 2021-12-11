import React from "react";

import HeaderSection from "./componets/header";
import ServiceSection from "./componets/services";
import Portfolio from "./componets/portfolio";
import Greet from "./componets/greet"
import Quotes from "./componets/quota"
import Footer from "./componets/footer";

const App = () => {
  return (
    <>
      <HeaderSection />
      <ServiceSection />
      <Portfolio />
      <Greet/>
      <Quotes/>
      <Footer/>
    </>
  );
};

export default App;
