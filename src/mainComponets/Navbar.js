import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top Navbar bg-white-md ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler text-bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link mx-2 active" to="/Visa">
                  <i className="fa-brands fa-cc-visa"></i>&nbsp; Visa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" to="/flight">
                  <i className="fa-solid fa-jet-fighter"></i>
                  Flight
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" to="/offers">
                  <i className="bi bi-tags"></i>
                  Offers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" to="/packages">
                  Packages
                </NavLink>
              </li>
            </ul>
            <div className="d-flex navBtnGroup">
              <button className="btn navBtn btn-lg mx-2 ">
                Free Consultancy
              </button>
              <button className="btn navBtn btn-lg ">My Account</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
