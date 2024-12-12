import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LowerFooter from "./LowerFooter";
import Navbar from "./Navbar";
import UpperFooter from "./UpperFooter";
export default function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleUseName = async (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = async (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = async (e) => {
    setUserPassword(e.target.value);
  };
  const handleConfirmPassword = async (e) => {
    setUserConfirmPassword(e.target.value);
  };
  const handleData = async (e) => {
    e.preventDefault();
    if (userPassword === userConfirmPassword) {
      try {
        setLoading(true);
        const response = await fetch(
          "https://travel-and-tourism-apis.vercel.app/signUp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, userEmail, userPassword }),
          }
        );

        const data = await response.json();

        if (data.success) {
          // Redirect to the dashboard upon successful login
          // history.push('/dashboard');
          navigate("/login");
          toast.success(data.message);
        } else {
          // Handle login failure
          console.error(data.message);
          toast.error(data.message);
        }
      } catch (error) {
        console.error("Error occurred during login:", error);
        toast.error("Error occurred");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Both Password must be same");
    }
  };
  return (
    <>
      {/* <div className="navbarImg">
        <Navbar />
      </div> */}
      <div className="mb-3">
        <div className="container wrapper d-flex justify-content-center align-items-center w-100">
          <div className="signUp">
            <img
              src="https://res.cloudinary.com/dckaznwk5/image/upload/v1705475272/LogoDark_kbxgw3.png"
              alt="PlatformIntl"
              className="d-flex justify-content-center align-items-center m-auto mb-3"
              style={{
                width: "200px",
                height: "85px",
                borderRadius: "10px",
              }}
            />
            {/* <h4 className="d-flex justify-content-center align-content-center">
              SignUp
            </h4> */}
            <hr />
            <div className="">
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  UserName
                </label>
                <input
                  type="email"
                  className="form-control"
                  required
                  id="UserName"
                  aria-describedby=""
                  value={userName}
                  onChange={handleUseName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  required
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={userEmail}
                  onChange={handleEmail}
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  required
                  id="exampleInputPassword1"
                  value={userPassword}
                  onChange={handlePassword}
                />
              </div>
              <div className="mb-3 my-3 ">
                <label
                  htmlFor="exampleInputConfirmPassword1"
                  className="form-label"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  className="form-control"
                  id="exampleInputConfirmPassword1"
                  value={userConfirmPassword}
                  onChange={handleConfirmPassword}
                />
              </div>
              <div className="mb-3">
                <Link to="/login" className="text-decoration text-light">
                  Already have a Account
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={handleData}
                disabled={loading}
              >
                {loading ? "......" : "SignUp"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <UpperFooter />
      <LowerFooter /> */}
    </>
  );
}
