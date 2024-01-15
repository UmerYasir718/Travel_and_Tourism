import React from "react";
import CarouselOfPapularRoutes from "../../mainComponets/CarouselOfPapularRoutes";
import LowerFooter from "../../mainComponets/LowerFooter";
import SelectBar from "../../mainComponets/SelectBar";
import TopDestination from "../../mainComponets/TopDestination";
import TopVisaDestination from "../../mainComponets/TopVisaDestination";
import UpperFooter from "../../mainComponets/UpperFooter";
import Carousel from "./Carousel";
import CarouselButtons from "./CarouselButtons";
import NavHome from "./NavHome";
export default function Home() {
  return (
    <div>
      <NavHome />
      <SelectBar />
      <CarouselButtons />
      <Carousel />
      <TopDestination />
      <CarouselOfPapularRoutes />
      <TopVisaDestination />
      <UpperFooter />
      <LowerFooter />
    </div>
  );
}
