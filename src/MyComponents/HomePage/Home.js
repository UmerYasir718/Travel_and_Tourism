import React from "react";
import Carousel from "./Carousel";
import NavHome from "./NavHome";
import TopDestination from "./TopDestination";

export default function Home() {
  return (
    <div>
      <NavHome />
      <Carousel />
      <TopDestination />
    </div>
  );
}
