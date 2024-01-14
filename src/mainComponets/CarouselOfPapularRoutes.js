import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MostPopularRoutes from "./MostPopularRoutes";

export default function CarouselOfPapularRoutes() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="container mb-3">
        <h2 className="fw-bold mb-4">Most Popular Routes</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <MostPopularRoutes />
          <MostPopularRoutes />
          <MostPopularRoutes />
          <MostPopularRoutes />
          <MostPopularRoutes />
          <MostPopularRoutes />
          <MostPopularRoutes />
          <MostPopularRoutes />
          <MostPopularRoutes />
          <MostPopularRoutes />
          <MostPopularRoutes />
        </Carousel>
      </div>
    </>
  );
}
