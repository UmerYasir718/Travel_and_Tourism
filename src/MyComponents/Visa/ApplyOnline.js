import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function ApplyOnline() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1198 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1198, min: 992 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 650 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="container mb-3">
        <h2 className="fw-bold mb-4">Most Popular Routes</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
        >
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 ApplyCardSetting">
            <div className="float-start" style={{ width: "25rem" }}>
              <figure className="position-relative">
                <img
                  src="https://www.yugo.pk/assets/img/home/easy-step1.svg"
                  alt=""
                  className="card-img-top ApplyCard-img"
                />
              </figure>
              <div className="">
                <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                  <div className="card-detail-1">
                    <span className="Method">Apply On Website</span>
                    <div className="MethodDescription">
                      FillUp the request form online by clicking on book now. It
                      will take less than 20 seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 ApplyCardSetting">
            <div className="float-start" style={{ width: "25rem" }}>
              <figure className="position-relative">
                <img
                  src="https://www.yugo.pk/assets/img/home/easy-step2.svg"
                  alt=""
                  className="card-img-top ApplyCard-img"
                />
              </figure>
              <div className="">
                <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                  <div className="card-detail-1">
                    <span className="Method">Submit Documents</span>
                    <div className="MethodDescription">
                      Email or courier us your documents to process your visa
                      application0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 ApplyCardSetting">
            <div className="float-start" style={{ width: "25rem" }}>
              <figure className="position-relative">
                <img
                  src="https://www.yugo.pk/assets/img/home/easy-step3.svg"
                  alt=""
                  className="card-img-top ApplyCard-img"
                />
              </figure>
              <div className="">
                <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                  <div className="card-detail-1">
                    <span className="Method">Receive Visa</span>
                    <div className="MethodDescription">
                      We will courier or email your visa once it is processed or
                      file is prepared
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
