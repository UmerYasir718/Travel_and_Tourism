import React from "react";

export default function PopularAirlines() {
  return (
    <div>
      <div className="container mb-3 ">
        <h2>Popular Airlines</h2>
        <div className="row  ">
          <div className="col-lg-3 col-md-6 col-sm-12 AirLinesCard">
            <img src="https://yugo.pk/airlines/1629465513.PIA01.png" alt="" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 AirLinesCard">
            <img
              src="https://yugo.pk/airlines/1629465917.airblue01.png"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 AirLinesCard">
            <img
              src="https://yugo.pk/airlines/1629465976.airsial01.png"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 AirLinesCard">
            <img src="https://yugo.pk/airlines/1629466018.qatar01.png" alt="" />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-3 col-md-6 col-sm-12 AirLinesCard">
            <img
              src="https://yugo.pk/airlines/1629466074.etihad01.png"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 AirLinesCard">
            <img
              src="https://yugo.pk/airlines/1629466125.flydubai01.png"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 AirLinesCard">
            <img
              src="https://yugo.pk/airlines/1629466172.british01.png"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 AirLinesCard">
            <img
              src="https://yugo.pk/airlines/1629466245.turkish01.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
