import React from "react";
import LowerFooter from "../../mainComponets/LowerFooter";
import UpperFooter from "../../mainComponets/UpperFooter";
import Carousel from "./Carousel";
import MostPopularRoutes from "./MostPopularRoutes";
import NavHome from "./NavHome";
import SelectBar from "./SelectBar";
import TopDestination from "./TopDestination";
import TopVisaDestination from "./TopVisaDestination";
import CarouselButtons from "../../mainComponets/CarouselButtons";

export default function Home() {
  return (
    <div>
      <NavHome />
      <SelectBar />
      <CarouselButtons />
      <Carousel />
      <TopDestination />
      <MostPopularRoutes />
      <TopVisaDestination />
      <UpperFooter />
      <LowerFooter />
    </div>
  );
}
