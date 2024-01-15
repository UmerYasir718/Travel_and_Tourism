import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Country from "../MyComponents/Country/Country";
import Flight from "../MyComponents/Flights/Flight";
import Home from "../MyComponents/HomePage/Home";
import Offers from "../MyComponents/Offers/Offers";
import Packages from "../MyComponents/Packages/Packages";
import Visa from "../MyComponents/Visa/Visa";
// import Login from "./Login";
import Login from "./Login";
import SignUp from "./SignUp";
import StateContext from "./StateContext";
export default function MainRoutes() {
  const [user, setUser] = useState([]);
  return (
    <div>
      <StateContext.Provider value={{ user, setUser }}>
        <Router basename="/">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/visa" element={<Visa />}></Route>
            <Route exact path="/flight" element={<Flight />}></Route>
            <Route exact path="/offers" element={<Offers />}></Route>
            <Route exact path="/packages" element={<Packages />}></Route>
            <Route exact path="/country" element={<Country />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
      </StateContext.Provider>
    </div>
  );
}
