import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function HowToBook() {
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
        <h2 className="fw-bold mb-4">Why Book with us!</h2>
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
          <div className="col-4 col-12 col-sm-12 col-md-6 col-lg-4 BookingCard ">
            <img
              src="https://res.cloudinary.com/dckaznwk5/image/upload/v1705838793/refund-change_i6zokz.svg"
              alt=""
            />
          </div>
          <div className="col-4 col-12 col-sm-12 col-md-6 col-lg-4 BookingCard">
            <img
              src="https://res.cloudinary.com/dckaznwk5/image/upload/v1705838791/lowest-prices_fuarwo.svg"
              alt=""
            />
          </div>
          <div className="col-4 col-12 col-sm-12 col-md-6 col-lg-4 BookingCard ">
            <img
              src="https://res.cloudinary.com/dckaznwk5/image/upload/v1705838791/faster-access_v4nznd.svg"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
