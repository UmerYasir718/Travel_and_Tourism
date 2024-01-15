import React from "react";

export default function MostPopularRoutes() {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
        <div className="float-start" style={{ width: "25rem" }}>
          <figure className="position-relative">
            <img
              src="https://www.yugo.pk/routes/1645006505.Lahore%20to%20Dubai%20Flights.png"
              alt=""
              className="card-img-top MPRCard-img"
            />
          </figure>
          <div className="">
            <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
              <div className="card-detail-1">
                <span className="Destination">Lahore To Dubai</span>
                <br />
                <span className="MPRStartingFrom">Starting from</span>

                <div className="MPRPrice"> PKR 12,000</div>
              </div>
            </div>
          </div>
        </div>
                  
      </div>
      {/* <div className="cardSetting" style={{ width: "18rem" }}>
        <img
          src="https://www.yugo.pk/routes/1645006505.Lahore%20to%20Dubai%20Flights.png"
          className="card-img-top my-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center">Karachi ➖ Islamabad</h5>
          <p className="text-center">
            <b className="text-primary">Starting From</b>
            <br />
            <b>PKR:12,000</b>
          </p>
        </div>
      </div> */}
    </>
  );
}
