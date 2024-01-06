import React from "react";

export default function MostPopularRoutes() {
    return (
        <div className="container mb-3 ">
            <h2 className="fw-bold mb-4">Most Popular Routes</h2>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-3 col-12 col-sm-6 col-md-3 col-lg-3 mb-3 d-flex justify-content-center align-content-center">
                                <div className="float-start" style={{ width: "25rem" }}>
                                    <figure className="position-relative">
                                        <img
                                            src="https://www.yugo.pk/routes/1645006505.Lahore%20to%20Dubai%20Flights.png"
                                            alt=""
                                            style={{ borderRadius: "3px" }}
                                            className="card-img-top card-img border border-dark rounded-5 p-3"
                                        />
                                    </figure>
                                    <div className="">
                                        <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                                            <div className="card-detail-1">
                                                <span className="text-secondary fw-bolder text-uppercase">Lahore To Dubai</span>
                                                <br />
                                                <span className="rubik-regular text-primary fw-bolder d-flex justify-content-center align-content-center">Starting from</span>

                                                <div className="text-dark fw-bolder d-flex justify-content-center align-content-center"> PKR 12,000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 col-12 col-sm-6 col-md-3 col-lg-3 mb-3 d-flex justify-content-center align-content-center">
                                <div className="float-start" style={{ width: "25rem" }}>
                                    <figure className="position-relative">
                                        <img
                                            src="https://www.yugo.pk/routes/1629820117.KHR-ISB.png"
                                            alt=""
                                            style={{ borderRadius: "3px" }}
                                            className="card-img-top card-img border border-dark rounded-5 p-3"
                                        />
                                    </figure>
                                    <div className="">
                                        <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                                            <div className="card-detail-1">
                                                <span className="text-secondary fw-bolder text-uppercase">Karachi To Islamabad</span>
                                                <br />
                                                <span className="rubik-regular text-primary fw-bolder d-flex justify-content-center align-content-center">Starting from</span>
                                                <div className="text-dark fw-bolder d-flex justify-content-center align-content-center"> PKR 12,000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                            <div className="col-3 col-12 col-sm-6 col-md-3 col-lg-3 mb-3 d-flex justify-content-center align-content-center">  <div className="float-start" style={{ width: "25rem" }}>
                                <figure className="position-relative">
                                    <img
                                        src="https://www.yugo.pk/routes/1645010453.Karachi%20to%20Quetta%20Flights.png"
                                        alt=""
                                        style={{ borderRadius: "3px" }}
                                        className="card-img-top card-img border border-dark rounded-5 p-3"
                                    />
                                </figure>
                                <div className="">
                                    <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                                        <div className="card-detail-1">
                                            <span className="text-secondary fw-bolder text-uppercase">Karachi To Quetta</span>
                                            <br />
                                            <span className="rubik-regular text-primary fw-bolder d-flex justify-content-center align-content-center">Starting from</span>
                                            <div className="text-dark fw-bolder d-flex justify-content-center align-content-center"> PKR 12,000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div className="col-3 col-12 col-sm-6 col-md-3 col-lg-3 mb-3 d-flex justify-content-center align-content-center">  <div className="float-start" style={{ width: "25rem" }}>
                                <figure className="position-relative">
                                    <img
                                        src="https://www.yugo.pk/routes/1645009952.Islamabad%20to%20Dubai%20Flights.png"
                                        alt=""
                                        style={{ borderRadius: "3px" }}
                                        className="card-img-top card-img border border-dark rounded-5 p-3"
                                    />
                                </figure>
                                <div className="">
                                    <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                                        <div className="card-detail-1">
                                            <span className="text-secondary fw-bolder text-uppercase">Islamabad To Dubai</span>
                                            <br />
                                            <span className="rubik-regular text-primary fw-bolder d-flex justify-content-center align-content-center">Starting from</span>
                                            <div className="text-dark fw-bolder d-flex justify-content-center align-content-center"> PKR 12,000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                    </div>
                </div>

                {/* <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon text-bg-dark "
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon text-bg-dark"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    );
}
