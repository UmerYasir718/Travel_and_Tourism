import React from "react";
import LowerFooter from "../../mainComponets/LowerFooter";
import MostPopularRoutes from "../../mainComponets/MostPopularRoutes";
import UpperFooter from "../../mainComponets/UpperFooter";
import FlightCarousel from "./FlightCarousel";
import NavFlight from "./NavFlight";
import PopularAirlines from "./PopularAirlines";
export default function Flight() {
  return (
    <div>
      <NavFlight />
      <FlightCarousel />
      <MostPopularRoutes />
      <PopularAirlines />
      <UpperFooter />
      <LowerFooter />
      {/* <h1 className="alert alert-danger" style={{ marginTop: "100px" }}>
        Page Is Under Development
      </h1> */}
    </div>
  );
}
