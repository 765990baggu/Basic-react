import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

const Applayout = () => {
  return (
    <div className="Appcontainer">
      <Header />
      <Body />
    </div>
  );
};

console.log(Applayout);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
