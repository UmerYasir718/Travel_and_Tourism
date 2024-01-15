import React from "react";
import Navbar from "./Navbar";

export default function Login() {
    return (
        <div>
            <Navbar />
            <div className="container LoginForm" style={{ marginTop: "120px" }}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="inputPassword5" class="form-label">Password</label>
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
                </div>
            </div>
        </div>
    );
}
