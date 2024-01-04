import React from "react";

export default function LowerFooter() {
  return (
    <>
      <div className="container">
        <div className="row my-5 text-secondary">
          <div className="col-3 ">
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
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
