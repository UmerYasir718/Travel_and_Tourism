import React from "react";
import { Link } from "react-router-dom";
export default function LowerFooter() {
  return (
    <>
      <div className="container ">
        <div className="row my-5 text-secondary">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5>
              Got Question? Call us 24/7 <br />
              Call us: <b>0301-1234567</b>
            </h5>
            <div className="socialIcons my-3">
              <Link to="">
                <i class="bi bi-facebook"></i>
              </Link>
              <Link to="">
                <i class="bi bi-instagram"></i>
              </Link>
              <Link to="">
                <i class="bi bi-youtube"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 headerSection2 col-md-6 col-sm-12">
            <h4>Products</h4>
            <ul>
              <li>
                <Link to="">Flights</Link>
              </li>
              <li>
                <Link to="">Visas</Link>
              </li>
              <li>
                <Link to="">Rewards</Link>
              </li>
              <li>
                <Link to="">Site Map</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 headerSection2 col-md-6 col-sm-12">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="">Our Stories</Link>
              </li>
              <li>
                <Link to="">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 headerSection2 col-md-6 col-sm-12">
            <h4>Support</h4>
            <ul>
              <li>
                <Link to="">My Accounts</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
