import React, { useState } from "react";
import image from "../assets/img/img-01.png";
import SignUp from "./SignUp";
import SingIn from "./SignIn";

export default function Registration() {
  const [onClick, setOnClick] = useState(false);

  const onSelectLogin = (e) => {
    e.preventDefault();
    setOnClick(true);
  };
  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={image} alt="IMG" />
            </div>
            {onClick ? <SingIn /> : <SignUp />}
            <div className="text-center p-t-136">
              <a className="txt2" href="/" onClick={onSelectLogin}>
                Login your Account
                <i
                  className="fa fa-long-arrow-right m-l-5"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
