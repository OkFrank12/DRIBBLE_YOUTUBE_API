import React from "react";
import Hero from "./Dribble/Hero";
import CardPanel from "./Dribble/CardPanel";
import Header from "../Components/Block/Header";

const DribbleScreen = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardPanel />
    </div>
  );
};

export default DribbleScreen;
