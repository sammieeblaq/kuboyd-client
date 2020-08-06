import React from "react";
// import image from "../assets/img/img-01.png";

export default function SignUp() {
  return (
    <div>
      <form className="login100-form validate-form">
        <span className="login100-form-title">New Member</span>
        <div
          className="wrap-input100 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <input
            className="input100"
            type="phone"
            name="phone"
            placeholder="Phone"
          />
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </span>
        </div>
        <div
          className="wrap-input100 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <input
            className="input100"
            type="text"
            name="email"
            placeholder="Email"
          />
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </span>
        </div>
        <div
          className="wrap-input100 validate-input"
          data-validate="Password is required"
        >
          <input
            className="input100"
            type="password"
            name="pass"
            placeholder="Password"
          />
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true"></i>
          </span>
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn">SIGN UP</button>
        </div>
        <div className="text-center p-t-12">
          <span className="txt1">Forgot</span>
          <a className="txt2" href="/">
            Username / Password?
          </a>
        </div>
      </form>
    </div>
  );
}
