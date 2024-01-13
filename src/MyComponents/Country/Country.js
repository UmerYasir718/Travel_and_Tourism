import React from "react";
import Navbar from "../../mainComponets/Navbar";
import CountryContent from "./CountryContent";
import FAQ from "./FAQ";
export default function Country() {
  return (
    <>
      <Navbar />
      <img
        className="d-flex justify-content-center align-content-center"
        src="./australia.jpg"
        alt=""
        style={{
          position: "relative",
          width: "98vw",
          height: "40vh",
          marginTop: "100px",
        }}
      />
      <CountryContent />
      <FAQ />
    </>
  );
}
