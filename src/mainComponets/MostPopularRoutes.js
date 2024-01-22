import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function MostPopularRoutes() {
  const [routesData, setRoutesData] = useState("");
  const fetchRoutesData = async () => {
    try {
      const response = await fetch(
        "https://travelandtourismapis-production.up.railway.app/home/popularRoutes"
      );
      const json = await response.json();
      setRoutesData(json);
      console.log(routesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchRoutesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1198 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1198, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* <div className="row"> */}
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {Array.isArray(routesData) ? (
            routesData.map((routes, index) => (
              <div className="col-12 col-sm-6 col-md-3 col-lg-3  MPRCardSetting gap-3">
                <div className="float-start" style={{ width: "25rem" }}>
                  <figure className="position-relative">
                    <img
                      src={routes.image}
                      alt=""
                      className="card-img-top MPRCard-img d-flex justify-content-center align-content-center align-items-center"
                    />
                  </figure>
                  <div className="">
                    <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                      <div className="card-detail-1">
                        <span className="Destination">
                          {routes.srcPlace} To {routes.desPlace}
                        </span>
                        <br />
                        <span className="MPRStartingFrom">Starting from</span>

                        <div className="MPRPrice">PKR {routes.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <ul>
              <li className="CountryName list-group-item">No Data Available</li>
            </ul>
          )}
          {/* </div> */}
        </Carousel>
      </div>
    </>
  );
}
