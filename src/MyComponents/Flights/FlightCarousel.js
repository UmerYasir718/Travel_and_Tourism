import React, { useContext } from "react";
import StateContext from "../../mainComponets/StateContext";
export default function FlightCarousel() {
  const { carouselData } = useContext(StateContext);
  const flightImages = carouselData.filter((item) => item.page === "flight");

  return (
    <div className="container" style={{ position: "relative" }}>
      <h1 className="my-3">Best Deals</h1>
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-4 rounded"
        data-bs-ride="carousel"
        style={{ position: "relative" }}
      >
        <div className="carousel-indicators">
          {flightImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {flightImages.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={item.image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
//   return (
//     <div>
//       <div className="container" style={{ position: "relative" }}>
//         <h1 className="my-3">Best Deals</h1>
//         <div
//           id="carouselExampleIndicators"
//           className="carousel slide my-4 rounded  m-auto d-flex justify-content-center align-content-center"
//           data-bs-ride="true"
//         >
//           <div className="carousel-indicators">
//             <button
//               type="button"
//               data-bs-target="#carouselExampleIndicators"
//               data-bs-slide-to="0"
//               className="active "
//               aria-current="true"
//               aria-label="Slide 1"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#carouselExampleIndicators"
//               data-bs-slide-to="1"
//               aria-label="Slide 2"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#carouselExampleIndicators"
//               data-bs-slide-to="2"
//               aria-label="Slide 3"
//             ></button>
//           </div>
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img
//                 src="https://res.cloudinary.com/dckaznwk5/image/upload/v1705475273/sliderImg1_o2roy5.jpg"
//                 className="d-block w-100"
//                 data-bs-interval="20"
//                 alt="..."
//               />
//             </div>
//             <div className="carousel-item">
//               <img
//                 src="https://res.cloudinary.com/dckaznwk5/image/upload/v1705475275/sliderImg2_sd12vy.jpg"
//                 className="d-block w-100"
//                 data-bs-interval="10000"
//                 alt="..."
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
