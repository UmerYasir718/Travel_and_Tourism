import React from "react";

export default function TopDestination() {
  return (
    <div className="container mb-3">
      <div className="row">
        <div class="col-3 col-12 col-md-6 col-sm-12 col-lg-3 mb-3 d-flex justify-content-center align-content-center">
          <div className="float-start" style={{ width: "25rem" }}>
            <figure className="position-relative">
              <img
                src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1645445428.png"
                alt=""
                style={{ borderRadius: "3px" }}
                className="card-img-top card-img rounded-2"
              />

              <div
                className=" rubik-medium position-absolute text-uppercase"
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
            <div className="">
              <div className="card-detail">
                <div className="card-detail-1">
                  <span className="text-secondary fw-bolder text-uppercase">Processing Time</span>
                  <br />5 Working Days
                </div>
                &nbsp;
                <div className="card-detail-2">
                  <span className="rubik-regular text-primary fw-bolder ">Starting from</span>

                  <br />
                  <div className="text-dark fw-bolder"> PKR 12,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 col-12 col-md-6 col-sm-12 col-lg-3 mb-3 d-flex justify-content-center align-content-center">
          <div className="" style={{ width: "25rem" }}>
            <figure className="position-relative">
              <img
                src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1630394167.png"
                className="card-img-top card-img rounded-2"
                alt="..."
              />

              <h5 className="card-title rubik-medium position-absolute text-uppercase"
                style={{
                  left: "10px",
                  bottom: "10px",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}>
                United-kingdom
              </h5>
            </figure>
            <div className="card-body">
              <p className="card-text ">
                <div className="card-detail">
                  <div className="card-detail-1">
                    <span className="text-secondary fw-bolder text-uppercase">Processing Time</span>
                    <br />5 Working Days
                  </div>
                  &nbsp;
                  <div className="card-detail-2">
                    <span className="rubik-regular text-primary fw-bolder ">Starting from</span>

                    <br />
                    <div className="text-dark fw-bolder"> PKR 12,000
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div class="col-6 col-12 col-md-12 col-sm-12 col-lg-6 mb-3 d-flex justify-content-center align-content-center">
          <div className="" style={{ width: "50rem" }}>
            <figure className="position-relative">
              <img
                src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1641464933.png"
                className="card-img-top card-img-large rounded-2"
                alt="..."
              />

              <h5 className="card-title rubik-medium position-absolute text-uppercase"
                style={{
                  left: "10px",
                  bottom: "10px",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}>
                Turkey</h5>
            </figure>
            <div className="card-body">
              <p className="card-text">
                <div className="card-detail">
                  <div className="card-detail-1">
                    <span className="text-secondary fw-bolder text-uppercase">Processing Time</span>
                    <br />5 Working Days
                  </div>
                  {/* &nbsp; */}
                  <div className="card-detail-2">
                    <span className="rubik-regular text-primary fw-bolder ">Starting from</span>

                    <br />
                    <div className="text-dark fw-bolder"> PKR 12,000
                    </div>
                  </ div>
                </div>
              </p>
            </div>
          </div>
        </div>
        {/* <div class="col-3 col-12 col-md-6 col-sm-12 col-lg-3 mb-3 d-flex justify-content-center align-content-center">
          <div class="card" data-id="1" style={{ width: "25rem" }}>
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              class="card-img-top card-img"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
              </h5>
            </div>
            <div class="card-detail">
              <h4 class="text-decoration-none text-dark fw-bold">$ 109.95</h4>
              <h6 class="product-rating">
                <span class="badge bg-danger ">
                  <i class="bi bi-star-fill">&nbsp;</i>
                  <i class="bi bi-star-fill">&nbsp;</i>
                  <i class="bi bi-star-fill">&nbsp;</i>
                </span>
              </h6>
            </div>
            <div class="card-bottom">
              <button class="btncart fw-bold cart" type="button" id="btn-1">
                Add to Cart
              </button>
            </div>
          </div>
        </div> */}
        {/* <div className="col-12 col-md-3 col-sm-6 col-lg-3 d-flex justify-content-center align-content-center">
          <div className="float-start" style={{ width: "16vw" }}>
            <figure className="position-relative">
              <img
                src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1645445428.png"
                alt=""
                style={{ borderRadius: "3px" }}
                className="card-img-top card-img"
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
        <div className="col-12 col-md-3 col-sm-6 col-lg-3 d-flex justify-content-center align-content-center">
          <div className="card" style={{ width: "16vw" }}>
            <img
              src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1630394167.png"
              className="card-img-top card-img"
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
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-content-center">
          <div className="card" style={{ width: "33vw" }}>
            <img
              src="https://www.yugo.pk/assets/img/ItemMasterImages/Tile_images/tileImg_1641464933.png"
              className="card-img-top card-img-large"
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
        </div> */}
      </div>
    </div >
  );
}
