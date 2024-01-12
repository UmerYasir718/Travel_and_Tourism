import React from "react";
import NavFlight from "./NavFlight"
import FlightCarousel from "./FlightCarousel"
import MostPopularRoutes from "../../mainComponets/MostPopularRoutes"
import UpperFooter from "../../mainComponets/UpperFooter"
import LowerFooter from "../../mainComponets/LowerFooter"
export default function Flight() {
  return (
    <div>
     <NavFlight/>
     <FlightCarousel/>
     <MostPopularRoutes/>
     <UpperFooter/>
     <LowerFooter/>
      {/* <h1 className="alert alert-danger" style={{ marginTop: "100px" }}>
        Page Is Under Development
      </h1> */}
    </div>
  );
}
