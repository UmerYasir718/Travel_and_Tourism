import React from "react";
import Carousel from "./Carousel";
import NavHome from "./NavHome";
import TopDestination from "./TopDestination";
import LowerFooter from "../../mainComponets/LowerFooter";
import UpperFooter from "../../mainComponets/UpperFooter";

export default function Home() {
  return (
    <div>
      <NavHome />
      <Carousel />
      <TopDestination />
      <UpperFooter />
      <LowerFooter />
    </div>
  );
}
