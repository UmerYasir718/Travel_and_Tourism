import React from "react";
import NavOffer from "./NavOffer";
import OfferCarousel from "./OfferCarousel";
import UpperFooter from "../../mainComponets/UpperFooter";
import LowerFooter from "../../mainComponets/LowerFooter";
import HowToBook from "./HowToBook";

export default function Offers() {
  return (
    <div>
      <NavOffer />
      <OfferCarousel />
      <HowToBook />
      <UpperFooter />
      <LowerFooter />

      <h1 className="alert alert-danger " style={{ marginTop: "100px" }}>
        Page Is Under Development
      </h1>
    </div>
  );
}
