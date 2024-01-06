import React from "react";
import LowerFooter from "../../mainComponets/LowerFooter";
import UpperFooter from "../../mainComponets/UpperFooter";
import Carousel from "./Carousel";
import MostPopularRoutes from "./MostPopularRoutes";
import NavHome from "./NavHome";
import SelectBar from "./SelectBar";
import TopDestination from "./TopDestination";

export default function Home() {
  return (
    <div>
      <NavHome />
      <SelectBar />
      <Carousel />
      <TopDestination />
      <MostPopularRoutes />
      <UpperFooter />
      <LowerFooter />
    </div>
  );
}
