import React from "react";
import Navbar from "../../mainComponets/Navbar";
import CountryContent from "./CountryContent";
export default function Country() {
  return (
    <>
      <Navbar />
      <img src="../public/australia.jpg" alt="" />
      <CountryContent />
    </>
  );
}
