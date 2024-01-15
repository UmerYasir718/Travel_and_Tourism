import React from "react";
import CarouselOfPapularRoutes from "../../mainComponets/CarouselOfPapularRoutes";
import LowerFooter from "../../mainComponets/LowerFooter";
import UpperFooter from "../../mainComponets/UpperFooter";
import FlightCarousel from "./FlightCarousel";
import NavFlight from "./NavFlight";
import PopularAirlines from "./PopularAirlines";
export default function Flight() {
  return (
    <div>
      <NavFlight />
      <FlightCarousel />
      <CarouselOfPapularRoutes />
      <PopularAirlines />
      <UpperFooter />
      <LowerFooter />
      {/* <h1 className="alert alert-danger" style={{ marginTop: "100px" }}>
        Page Is Under Development
      </h1> */}
    </div>
  );
}
