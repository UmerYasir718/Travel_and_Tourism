import React from "react";
import Navbar from "./Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="bg-dark">
        <div className=" wrapper container d-flex justify-content-center align-items-center w-100 ">
          <div className="login">
            <h4> Login </h4>
            <hr />
            <form className="need-validation">
              <div className="mb-3 was-validated">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control "
                  required
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div className="invalid-feedback">
                  <p>Make sure you enterd valid email</p>
                </div>
              </div>
              <div className="mb-3 was-validated">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
                <div className="invalid-feedback">
                  <p>Remember your password and dont share it with others</p>
                </div>
              </div>
              <div className="mb-3 form-check was-validated">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label
                  className="form-check-label"
                  for="exampleCheck1"
                  required
                >
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
