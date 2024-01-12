import React from "react";
import SelectBar from "../../mainComponets/SelectBar";
import TopDestination from "../../mainComponets/TopDestination";
import TopVisaDestination from "../../mainComponets/TopVisaDestination";
import ApplyOnline from "./ApplyOnline";
import NavVisa from "./NavVisa";
import VisaCarousel from "./VisaCarousel";
export default function Visa() {
  return (
    <div>
      <NavVisa />
      <SelectBar />
      <VisaCarousel />
      <ApplyOnline />
      <TopDestination />
      <TopVisaDestination />
      <h1 className="alert alert-danger " style={{ marginTop: "100px" }}>
        Page Is Under Development
      </h1>
    </div>
  );
}
