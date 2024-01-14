import React from "react";

export default function HowToBook() {
  return (
    <div>
      <div className="container mb-3 ">
        <h2>Why Book with us!</h2>
        <div className="row  ">
          <div className="col-4 col-12 col-sm-12 col-md-6 col-lg-4 BookingCard ">
            <img
              src="https://yugo.pk/assets/img/home/refund-change.svg"
              alt=""
            />
          </div>
          <div className="col-4 col-12 col-sm-12 col-md-6 col-lg-4 BookingCard">
            <img
              src="https://yugo.pk/assets/img/home/lowest-prices.svg"
              alt=""
            />
          </div>
          <div className="col-4 col-12 col-sm-12 col-md-6 col-lg-4 BookingCard ">
            <img
              src="https://yugo.pk/assets/img/home/faster-access.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
