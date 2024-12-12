import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Country from "../MyComponents/Country/Country";
import Flight from "../MyComponents/Flights/Flight";
import Home from "../MyComponents/HomePage/Home";
import Offers from "../MyComponents/Offers/Offers";
import Packages from "../MyComponents/PackagesPage/Packages";
import Visa from "../MyComponents/Visa/Visa";
import FreeConsultancy from "./FreeConsultancy";
import Login from "./Login";
import SignUp from "./SignUp";
import StateContext from "./StateContext";
export default function MainRoutes() {
  const [user, setUser] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const userData = localStorage.getItem("userData");

  useEffect(() => {
    // Parse the stringified userData into an object
    const parsedUserData = userData ? JSON.parse(userData) : null;

    // Now you can safely access the properties of the user data
    if (parsedUserData) {
      console.log(parsedUserData);
      console.log(parsedUserData.userName);
    } else {
      console.log("No user data found.");
    }
  }, [userData]); // u
  return (
    <div>
      <StateContext.Provider
        value={{ user, setUser, carouselData, setCarouselData }}
      >
        {userData?.length > 0 ? (
          <Router basename="/">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/visa" element={<Visa />}></Route>
              <Route exact path="/flight" element={<Flight />}></Route>
              <Route exact path="/offers" element={<Offers />}></Route>
              <Route exact path="/packages" element={<Packages />}></Route>
              <Route exact path="/country" element={<Country />}></Route>
              <Route exact path="/signup" element={<SignUp />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                exact
                path="/freeConsultancy"
                element={<FreeConsultancy />}
              ></Route>
            </Routes>
          </Router>
        ) : (
          <Router basename="/">
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Router>
        )}
      </StateContext.Provider>
    </div>
  );
}
