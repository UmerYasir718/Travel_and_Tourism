import React from "react";

export default function TopDestination() {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-3">
          {/* <div className="card" >
                    <img src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1645445428.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */}
          <div className="float-start">
            <figure className="position-relative">
              <img
                src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1645445428.png"
                alt=""
                style={{ borderRadius: "3px" }}
              />
              <div
                className="name rubik-medium position-absolute text-uppercase"
                style={{
                  left: "10px",
                  bottom: "10px",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Azerbaijan
              </div>
            </figure>
            <div className="float-start col-xl-12">
              <div className="float-start">
                <span className="d-block">Processing time</span>5 Working Days
              </div>
              &nbsp;
              <div className="float-end text-end">
                <span className="rubik-regular d-block">Starting from</span>
                PKR 12,000
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <img
              src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1630394167.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">United-kingdom</h5>
              <p className="card-text">
                <div className="float-start col-xl-12">
                  <div className="float-start">
                    <span className="d-block">Processing time</span>5 Working
                    Days
                  </div>
                  &nbsp;
                  <div className="float-end text-end">
                    <span className="rubik-regular d-block">Starting from</span>
                    PKR 12,000
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img
              src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1641464933.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Turkey</h5>
              <p className="card-text">
                <div className="float-start col-xl-12">
                  <div className="float-start">
                    <span className="d-block">Processing time</span>5 Working
                    Days
                  </div>
                  &nbsp;
                  <div className="float-end text-end">
                    <span className="rubik-regular d-block">Starting from</span>
                    PKR 12,000
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
