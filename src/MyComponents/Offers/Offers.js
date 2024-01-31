import React from "react";
import DowntoTop from "../../mainComponets/DowntoTop";
import LowerFooter from "../../mainComponets/LowerFooter";
import UpperFooter from "../../mainComponets/UpperFooter";
import HowToBook from "./HowToBook";
import NavOffer from "./NavOffer";
import OfferCarousel from "./OfferCarousel";

export default function Offers() {
  return (
    <div>
      <NavOffer />
      <OfferCarousel />
      <HowToBook />
      <UpperFooter />
      <LowerFooter />
      <DowntoTop />
      {/* <h1 className="alert alert-danger " style={{ marginTop: "100px" }}>
        Page Is Under Development
      </h1> */}
    </div>
  );
}
