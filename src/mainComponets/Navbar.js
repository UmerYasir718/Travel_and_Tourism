import React from "react";
import "../App.css";
export default function Navbar() {
  return (
    <>
      <div className="navbarImg">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" to="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" to="#">
                    Visa
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="#">
                    Flight
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Offers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Packages</a>
                </li>
              </ul>
              <form className="d-flex" role="search ">
                <button className="btn btn-primary btnFreeConsultancy">
                  {" "}
                  Free Consultancy{" "}
                </button>
                <button className="btn btn-primary btn "> My Acount </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
