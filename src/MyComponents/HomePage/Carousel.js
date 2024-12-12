import React, { useContext, useEffect } from "react";
import StateContext from "../../mainComponets/StateContext";
export default function Carousel() {
  const { carouselData, setCarouselData } = useContext(StateContext);
  const fetchRoutesData = async () => {
    try {
      const response = await fetch(
        "https://travel-and-tourism-apis.vercel.app/carouselPic"
      );
      const json = await response.json();
      setCarouselData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
      //   alert(error);
    }
  };
  useEffect(() => {
    fetchRoutesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const homeImages = carouselData.filter((item) => item.page === "home");

  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-4 rounded"
        data-bs-ride="carousel"
        // style={{ position: "relative", bottom: "100px" }}
      >
        <div className="carousel-indicators">
          {homeImages.map((_, index) => (
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
          {homeImages.map((item, index) => (
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
//     <div className="container">
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide my-4 rounded "
//         data-bs-ride="true"
//         style={{ position: "relative" }}
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="0"
//             className="active "
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="https://res.cloudinary.com/dckaznwk5/image/upload/v1705475273/sliderImg1_o2roy5.jpg"
//               className="d-block w-100"
//               data-bs-interval="20"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://res.cloudinary.com/dckaznwk5/image/upload/v1705475275/sliderImg2_sd12vy.jpg"
//               className="d-block w-100"
//               data-bs-interval="10000"
//               alt="..."
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
