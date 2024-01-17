import React, { useState } from "react";
import Navbar from "./Navbar";
export default function FreeConsultancy() {
  const [Number, setNumber] = useState(" ");
  const checkNumber = (event) => {
    setNumber(event.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="bg-dark">
        <div className="container wrapper d-flex justify-content-center align-items-center w-100">
          <div className="freeConsultuncy">
            <h4>Free Consultancy</h4>
            <hr />
            <div className="need-validation">
              <div class="row">
                <div class="col was-validated ">
                  <label for="exampleInputFirstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div class="col was-validated">
                  <label for="exampleInputLastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="mb-3 my-2 was-validated">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  required
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="input-group mb-3 my-2 was-validated">
                <span class="input-group-text" id="basic-addon1">
                  <b>+92</b>
                </span>
                <input
                  type="number"
                  required
                  class="form-control"
                  placeholder="Enter your contact Number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={checkNumber}
                />
              </div>
              <div className="checkNumber text-danger">
                {Number.length !== 10 ? <p> Please enter valid number</p> : " "}
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter your message here"
                  required
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 my-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
