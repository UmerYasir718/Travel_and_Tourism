import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LowerFooter from "./LowerFooter";
import Navbar from "./Navbar";
import UpperFooter from "./UpperFooter";
export default function FreeConsultancy() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [issue, setIssue] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleIssueText = (e) => {
    setIssue(e.target.value);
  };
  const handleData = async () => {
    if (!firstName || !lastName || !email || !subject || !issue) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    try {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        issue: issue,
      };
      console.log(formData);
      const response = await fetch(
        `https://travel-and-tourism-apis.vercel.app/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate content");
      } else {
        const json = await response.json();
        console.log(json);
        toast.success(json.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="navbarImg">
        <Navbar />
      </div>
      <div className="mb-3">
        <div className="container wrapper d-flex justify-content-center align-items-center w-100">
          <div className="freeConsultuncy">
            <h3 className="d-flex justify-content-center align-content-center">
              Free Consultancy
            </h3>
            <hr />
            <div className="">
              <div className="row">
                <div className="col ">
                  <label htmlFor="exampleInputFirstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    aria-label="First name"
                    onChange={handleFirstName}
                  />
                </div>
                <div className="col">
                  <label htmlFor="exampleInputLastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    aria-label="Last name"
                    onChange={handleLastName}
                  />
                </div>
              </div>
              <div className="my-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  required
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={handleEmail}
                />
              </div>
              <div className="my-2">
                <label htmlFor="exampleInputSubject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  aria-label="Last name"
                  onChange={handleSubject}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Explain Your Issue
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  required
                  rows="5"
                  onChange={handleIssueText}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 my-2"
                onClick={handleData}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <UpperFooter />
      <LowerFooter />
    </>
  );
}
