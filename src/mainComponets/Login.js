import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StateContext from "../mainComponets/StateContext";
export default function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(StateContext);
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://travel-and-tourism-apis.vercel.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userEmail, userPassword }),
        }
      );

      const data = await response.json();

      if (data.success) {
        // Login successful, you can handle the success scenario here
        console.log("Login successful:", data);
        await localStorage.setItem("userData", JSON.stringify(data.user));
        navigate("/");
        toast.success(data.message);
        setUser(data.user);
        console.log(data.user);
      } else {
        // Login failed, handle the error scenario
        console.error("Login failed:", data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* <div className="navbarImg">
        <Navbar />
      </div> */}
      <div className="mb-3">
        <div className="  container d-flex justify-content-center align-items-center ">
          <div className="login">
            <img
              src="https://res.cloudinary.com/dckaznwk5/image/upload/v1705475272/LogoDark_kbxgw3.png"
              alt="PlatformIntl"
              className="d-flex justify-content-center align-items-center m-auto mb-3"
              style={{
                width: "200px",
                height: "85px",
                // backgroundColor: "white",
                borderRadius: "10px",
              }}
            />
            {/* <h4 className="d-flex justify-content-center align-content-center">
              {" "}
              Login{" "}
            </h4> */}
            <hr />
            <div className="">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control "
                  required
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={userEmail}
                  onChange={handleEmailChange}
                />
                <div className="invalid-feedback">
                  <p>Make sure you enterd valid email</p>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                  value={userPassword}
                  onChange={handlePasswordChange}
                />
                <div className="invalid-feedback">
                  <p>Remember your password and dont share it with others</p>
                </div>
              </div>
              <div className="mb-3">
                <Link to="/signup" className="text-decoration text-light">
                  Create a Account ?
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "........." : "Login"}
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
