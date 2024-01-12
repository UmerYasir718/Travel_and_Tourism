import React from "react";

export default function ApplyOnline() {
    return (
        <div>
            <div className="container">
                <div
                    id="carouselExample"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active d-flex justify-content-center align-content-center ">
                            <div className="row ">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 ApplyCardSetting">
                                    <div className="float-start" style={{ width: "25rem" }}>
                                        <figure className="position-relative">
                                            <img
                                                src="https://www.yugo.pk/assets/img/home/easy-step1.svg"
                                                alt=""
                                                className="card-img-top MPRCard-img"
                                            />
                                        </figure>
                                        <div className="">
                                            <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                                                <div className="card-detail-1">
                                                    <span className="Method">Apply On Website</span>
                                                    <div className="MethodDescription">FillUp the request form online by clicking on book now. It will take less than 20 seconds</div>
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
                                                className="card-img-top MPRCard-img"
                                            />
                                        </figure>
                                        <div className="">
                                            <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                                                <div className="card-detail-1">
                                                    <span className="Method">
                                                        Submit Documents
                                                    </span>
                                                    <div className="MethodDescription">Email or courier us your documents to process your visa application0</div>
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
                                                className="card-img-top MPRCard-img"
                                            />
                                        </figure>
                                        <div className="">
                                            <div className="card-detail d-flex justify-content-center align-content-center align-items-center">
                                                <div className="card-detail-1">
                                                    <span className="Method">Receive Visa</span>
                                                    <div className="MethodDescription">We will courier or email your visa once it is processed or file is prepared</div>
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
        </div>
    );
}
