import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "../App.css";
import StateContext from "./StateContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [parsedUserData, setParsedUserData] = useState(null); // State to store parsed user data
  const navigate = useNavigate();
  const { user } = useContext(StateContext);
  const userData = localStorage.getItem("userData");

  useEffect(() => {
    // Parse the stringified userData into an object and update the state
    if (userData) {
      const data = JSON.parse(userData);
      setParsedUserData(data);
      console.log(data); // You can keep this for debugging
    } else {
      setParsedUserData(null);
      console.log("No user data found.");
    }
  }, [userData]); // Runs whenever the `userData` changes

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

  const handleLogout = () => {
    // Remove 'userData' from localStorage
    localStorage.removeItem("userData");

    // Redirect to the login page after logout
    navigate("/login");

    // Optionally, show a toast notification for successful logout
    toast.success("Logged out successfully!");
  };

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
              src="https://res.cloudinary.com/dckaznwk5/image/upload/v1705475272/LogoDark_kbxgw3.png"
              alt="PlatformIntl"
              style={{
                width: "200px",
                height: "85px",
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
                <NavLink className="nav-link" to="/packages">
                  Packages
                </NavLink>
              </li>
            </ul>
            <div className="d-flex navBtnGroup">
              {parsedUserData ? (
                <>
                  <div className="dropdown navBtn">
                    <Link
                      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {parsedUserData?.userEmail && parsedUserData?.userName ? (
                        <Avatar
                          style={{ background: "red" }}
                          sx={{ width: 35, height: 35 }}
                        >
                          {parsedUserData?.userName[0].toUpperCase()}
                        </Avatar>
                      ) : (
                        <Avatar>{}</Avatar>
                      )}
                      <strong>{parsedUserData?.userName}</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/login"
                          onClick={handleLogout}
                        >
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <button className="btn navBtn btn-lg  ">
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
