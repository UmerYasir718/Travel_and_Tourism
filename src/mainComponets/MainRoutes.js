import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Flight from "../MyComponents/Flights/Flight";
import Home from "../MyComponents/HomePage/Home";
import Offers from "../MyComponents/Offers/Offers";
import Packages from "../MyComponents/Packages/Packages";
import Visa from "../MyComponents/Visa/Visa";
export default function MainRoutes() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/visa" element={<Visa />}></Route>
          <Route exact path="/flight" element={<Flight />}></Route>
          <Route exact path="/offers" element={<Offers />}></Route>
          <Route exact path="/packages" element={<Packages />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
