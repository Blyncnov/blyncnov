import React from "react";

import HeaderSection from "./componets/header";
import ServiceSection from "./componets/services";
import Portfolio from "./componets/portfolio";
import Greet from "./componets/greet"
import Quotes from "./componets/quota"

const App = () => {
  return (
    <>
      <HeaderSection />
      <ServiceSection />
      <Portfolio />
      <Greet/>
      <Quotes/>
    </>
  );
};

export default App;
