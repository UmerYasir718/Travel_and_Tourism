import React from "react";

export default function Carousel() {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-4 rounded "
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="sliderImg1.jpg"
              className="d-block w-100"
              data-bs-interval="2000"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="sliderImg2.jpg"
              className="d-block w-100"
              data-bs-interval="10000"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
