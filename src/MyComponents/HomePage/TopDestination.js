import React from "react";

export default function TopDestination() {
  return (
    <div className="container mb-3">
      <div className="row">
        <h2 className="fw-bold mb-4">Top Visa Destination</h2>
        <div class="col-3 col-12 col-md-6 col-sm-12 col-lg-3 mb-3 TDCardSetting">
          <div className="float-start" style={{ width: "25rem" }}>
            <figure className="position-relative">
              <img
                src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1645445428.png"
                alt=""
                style={{ borderRadius: "3px" }}
                className="card-img-top card-img rounded-2"
              />

              <div className="CardTitle">Azerbaijan</div>
            </figure>
            <div className="">
              <div className="card-detail">
                <div className="card-detail-1">
                  <span className="ProcessingTime">Processing Time</span>
                  <br />5 Working Days
                </div>
                &nbsp;
                <div className="card-detail-2">
                  <span className="TDStartingFrom">Starting From</span>
                  <br />
                  <div className="TDPrice"> PKR 12,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 col-12 col-md-6 col-sm-12 col-lg-3 mb-3 TDCardSetting">
          <div className="" style={{ width: "25rem" }}>
            <figure className="position-relative">
              <img
                src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1630394167.png"
                className="card-img-top card-img rounded-2"
                alt="..."
              />

              <h5 className="CardTitle">United-kingdom</h5>
            </figure>
            <div className="card-body">
              <p className="card-text ">
                <div className="card-detail">
                  <div className="card-detail-1">
                    <span className="ProcessingTime">Processing Time</span>
                    <br />5 Working Days
                  </div>
                  &nbsp;
                  <div className="card-detail-2">
                    <span className="TDStartingFrom">Starting From</span>

                    <br />
                    <div className="TDPrice"> PKR 12,000</div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div class="col-6 col-12 col-md-12 col-sm-12 col-lg-6 mb-3 TDCardSetting">
          <div className="" style={{ width: "50rem" }}>
            <figure className="position-relative">
              <img
                src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1641464933.png"
                className="card-img-top card-img-large rounded-2"
                alt="..."
              />

              <h5 className="CardTitle">Turkey</h5>
            </figure>
            <div className="card-body">
              <p className="card-text">
                <div className="card-detail">
                  <div className="card-detail-1">
                    <span className="ProcessingTime">Processing Time</span>
                    <br />5 Working Days
                  </div>
                  {/* &nbsp; */}
                  <div className="card-detail-2">
                    <span className="TDStartingFrom">Starting From</span>

                    <br />
                    <div className="TDPrice"> PKR 12,000</div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
