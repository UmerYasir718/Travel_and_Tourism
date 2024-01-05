import React from "react";

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
              <a href="">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="">
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 headerSection2 col-md-6 col-sm-12">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="">Flights</a>
              </li>
              <li>
                <a href="">Visas</a>
              </li>
              <li>
                <a href="">Rewards</a>
              </li>
              <li>
                <a href="">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 headerSection2 col-md-6 col-sm-12">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="">Our Stories</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 headerSection2 col-md-6 col-sm-12">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="">My Accounts</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
