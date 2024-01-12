import React from "react";

export default function MostPopularRoutes() {
  return (
    <div className="container mb-3 ">
      <h2 className="fw-bold mb-4">Most Popular Routes</h2>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
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
              <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
                <div className="float-start" style={{ width: "25rem" }}>
                  <figure className="position-relative">
                    <img
                      src="https://www.yugo.pk/routes/1629820117.KHR-ISB.png"
                      alt=""
                      className="card-img-top MPRCard-img"
                    />
                  </figure>
                  <div className="">
                    <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                      <div className="card-detail-1">
                        <span className="Destination">
                          Karachi To Islamabad
                        </span>
                        <br />
                        <span className="MPRStartingFrom">Starting from</span>
                        <div className="MPRPrice"> PKR 12,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
                <div className="float-start" style={{ width: "25rem" }}>
                  <figure className="position-relative">
                    <img
                      src="https://www.yugo.pk/routes/1645010453.Karachi%20to%20Quetta%20Flights.png"
                      alt=""
                      className="card-img-top MPRCard-img"
                    />
                  </figure>
                  <div className="">
                    <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                      <div className="card-detail-1">
                        <span className="Destination">Karachi To Quetta</span>
                        <br />
                        <span className="MPRStartingFrom">Starting from</span>
                        <div className="MPRPrice"> PKR 12,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
                <div className="float-start" style={{ width: "25rem" }}>
                  <figure className="position-relative">
                    <img
                      src="https://www.yugo.pk/routes/1645009952.Islamabad%20to%20Dubai%20Flights.png"
                      alt=""
                      className="card-img-top MPRCard-img"
                    />
                  </figure>
                  <div className="">
                    <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                      <div className="card-detail-1">
                        <span className="Destination">Islamabad To Dubai</span>
                        <br />
                        <span className="MPRStartingFrom">Starting from</span>
                        <div className="MPRPrice"> PKR 12,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect } from "react";

// export default function MostPopularRoutes() {
//   useEffect(() => {
//     // Initialize the carousel on smaller screens
//     if (window.innerWidth < 768) {
//       const carousel = new window.bootstrap.Carousel(
//         document.getElementById("carouselExample"),
//         { interval: 5000 } // Set the interval to 5 seconds
//       );
//     }
//   }, []);

//   return (
//     <div className="container mb-3">
//       <h2 className="fw-bold mb-4">Most Popular Routes</h2>
//       <div
//         id="carouselExample"
//         className="carousel slide d-md-none"
//         data-bs-ride="carousel"
//         data-bs-interval="5000"
//       >
//         <div className="carousel-inner">
//           {/* Your carousel items */}
//           <div className="carousel-item active">
//             <div className="row">
//               <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
//                 <div className="float-start" style={{ width: "25rem" }}>
//                   <figure className="position-relative">
//                     <img
//                       src="https://www.yugo.pk/routes/1645006505.Lahore%20to%20Dubai%20Flights.png"
//                       alt=""
//                       className="card-img-top MPRCard-img"
//                     />
//                   </figure>
//                   <div className="">
//                     <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
//                       <div className="card-detail-1">
//                         <span className="Destination">Lahore To Dubai</span>
//                         <br />
//                         <span className="MPRStartingFrom">Starting from</span>

//                         <div className="MPRPrice"> PKR 12,000</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
//                 <div className="float-start" style={{ width: "25rem" }}>
//                   <figure className="position-relative">
//                     <img
//                       src="https://www.yugo.pk/routes/1629820117.KHR-ISB.png"
//                       alt=""
//                       className="card-img-top MPRCard-img"
//                     />
//                   </figure>
//                   <div className="">
//                     <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
//                       <div className="card-detail-1">
//                         <span className="Destination">
//                           Karachi To Islamabad
//                         </span>
//                         <br />
//                         <span className="MPRStartingFrom">Starting from</span>
//                         <div className="MPRPrice"> PKR 12,000</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
//                 <div className="float-start" style={{ width: "25rem" }}>
//                   <figure className="position-relative">
//                     <img
//                       src="https://www.yugo.pk/routes/1645010453.Karachi%20to%20Quetta%20Flights.png"
//                       alt=""
//                       className="card-img-top MPRCard-img"
//                     />
//                   </figure>
//                   <div className="">
//                     <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
//                       <div className="card-detail-1">
//                         <span className="Destination">Karachi To Quetta</span>
//                         <br />
//                         <span className="MPRStartingFrom">Starting from</span>
//                         <div className="MPRPrice"> PKR 12,000</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
//                 <div className="float-start" style={{ width: "25rem" }}>
//                   <figure className="position-relative">
//                     <img
//                       src="https://www.yugo.pk/routes/1645009952.Islamabad%20to%20Dubai%20Flights.png"
//                       alt=""
//                       className="card-img-top MPRCard-img"
//                     />
//                   </figure>
//                   <div className="">
//                     <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
//                       <div className="card-detail-1">
//                         <span className="Destination">Islamabad To Dubai</span>
//                         <br />
//                         <span className="MPRStartingFrom">Starting from</span>
//                         <div className="MPRPrice"> PKR 12,000</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <div className="row">
//               <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
//                 <div className="float-start" style={{ width: "25rem" }}>
//                   <figure className="position-relative">
//                     <img
//                       src="https://www.yugo.pk/routes/1645006505.Lahore%20to%20Dubai%20Flights.png"
//                       alt=""
//                       className="card-img-top MPRCard-img"
//                     />
//                   </figure>
//                   <div className="">
//                     <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
//                       <div className="card-detail-1">
//                         <span className="Destination">Lahore To Dubai</span>
//                         <br />
//                         <span className="MPRStartingFrom">Starting from</span>

//                         <div className="MPRPrice"> PKR 12,000</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
//                 <div className="float-start" style={{ width: "25rem" }}>
//                   <figure className="position-relative">
//                     <img
//                       src="https://www.yugo.pk/routes/1629820117.KHR-ISB.png"
//                       alt=""
//                       className="card-img-top MPRCard-img"
//                     />
//                   </figure>
//                   <div className="">
//                     <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
//                       <div className="card-detail-1">
//                         <span className="Destination">
//                           Karachi To Islamabad
//                         </span>
//                         <br />
//                         <span className="MPRStartingFrom">Starting from</span>
//                         <div className="MPRPrice"> PKR 12,000</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Add more carousel items as needed */}
//         </div>
//       </div>
//       <div className="row d-none d-md-flex">
//         {/* Your grid items for larger screens */}
//         <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
//           <div className="float-start" style={{ width: "25rem" }}>
//             <figure className="position-relative">
//               <img
//                 src="https://www.yugo.pk/routes/1645006505.Lahore%20to%20Dubai%20Flights.png"
//                 alt=""
//                 className="card-img-top MPRCard-img"
//               />
//             </figure>
//             <div className="">
//               <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
//                 <div className="card-detail-1">
//                   <span className="Destination">Lahore To Dubai</span>
//                   <br />
//                   <span className="MPRStartingFrom">Starting from</span>

//                   <div className="MPRPrice"> PKR 12,000</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
//           <div className="float-start" style={{ width: "25rem" }}>
//             <figure className="position-relative">
//               <img
//                 src="https://www.yugo.pk/routes/1629820117.KHR-ISB.png"
//                 alt=""
//                 className="card-img-top MPRCard-img"
//               />
//             </figure>
//             <div className="">
//               <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
//                 <div className="card-detail-1">
//                   <span className="Destination">Karachi To Islamabad</span>
//                   <br />
//                   <span className="MPRStartingFrom">Starting from</span>
//                   <div className="MPRPrice"> PKR 12,000</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
//           <div className="float-start" style={{ width: "25rem" }}>
//             <figure className="position-relative">
//               <img
//                 src="https://www.yugo.pk/routes/1645010453.Karachi%20to%20Quetta%20Flights.png"
//                 alt=""
//                 className="card-img-top MPRCard-img"
//               />
//             </figure>
//             <div className="">
//               <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
//                 <div className="card-detail-1">
//                   <span className="Destination">Karachi To Quetta</span>
//                   <br />
//                   <span className="MPRStartingFrom">Starting from</span>
//                   <div className="MPRPrice"> PKR 12,000</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-3 MPRCardSetting">
//           <div className="float-start" style={{ width: "25rem" }}>
//             <figure className="position-relative">
//               <img
//                 src="https://www.yugo.pk/routes/1645009952.Islamabad%20to%20Dubai%20Flights.png"
//                 alt=""
//                 className="card-img-top MPRCard-img"
//               />
//             </figure>
//             <div className="">
//               <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
//                 <div className="card-detail-1">
//                   <span className="Destination">Islamabad To Dubai</span>
//                   <br />
//                   <span className="MPRStartingFrom">Starting from</span>
//                   <div className="MPRPrice"> PKR 12,000</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Add more grid items as needed */}
//       </div>
//     </div>
//   );
// }
