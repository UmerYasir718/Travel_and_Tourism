import React from "react";

export default function SignUp() {
  return (
    <>
      <div className="bg-dark">
        <div className="container wrapper d-flex justify-content-center align-items-center w-100">
          <div className="signUp">
            <h4>SignUp</h4>
            <hr />
            <form className="need-validation">
              <div className="mb-3 was-validated">
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
              <div className="mb-3 was-validated">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  required
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 my-3 was-validated">
                <label for="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
