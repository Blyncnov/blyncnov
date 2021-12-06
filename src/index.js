import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App";

const Index = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
