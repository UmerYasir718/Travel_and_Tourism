import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
export default function Navbar() {
  return (
    <>
      <div className="navbarImg">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Navbar
            </NavLink>
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
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Visa
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Flight
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">Offers</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">Packages</NavLink>
                </li>
              </ul>
              <div className="d-flex" role="search ">
                <button className="btn btn-danger p-2 rounded btn-lg  mx-2 ">
                  Free Consultancy
                </button>
                <button className="btn btn-danger p-2 rounded                              btn-lg ">
                  My Acount
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
