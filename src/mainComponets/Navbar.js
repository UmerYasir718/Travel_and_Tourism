import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import StateContext from "./StateContext";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useContext(StateContext);
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
            <img
              src="./LogoDark.png"
              alt="PlatformIntl"
              style={{
                width: "200px",
                height: "70px",
                backgroundColor: "black",
                borderRadius: "10px",
              }}
            />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link  " to="/visa">
                  <i className="fa-brands fa-cc-visa"></i> Visa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/flight">
                  <i className="fa-solid fa-jet-fighter"></i>
                  Flight
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/offers">
                  <i className="bi bi-tags"></i>
                  Offers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/country">
                  Packages
                </NavLink>
              </li>
            </ul>
            <div className="d-flex navBtnGroup">
              {user.userName ? (
                <>
                  <div className="dropdown navBtn">
                    <Link
                      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                      />
                      <strong>{user.userName}</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                      <li>
                        <Link className="dropdown-item">New project...</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Settings</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Profile</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/signUp">
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user.userName}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="#">
                          LogOut
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                </>
              ) : (
                <button className="btn navBtn btn-lg">
                  <Link
                    className="text-decoration-none text-light "
                    to="/login"
                  >
                    My Account
                  </Link>
                </button>
              )}
              <button className="btn navBtn btn-lg mx-2 ">
                <Link
                  className="text-decoration-none text-light "
                  to="/freeConsultancy"
                >
                  Free Consultancy
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
