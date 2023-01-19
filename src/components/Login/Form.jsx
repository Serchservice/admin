import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Form() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleClick = () => {
    if (!showPassword) {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
    setShowPassword(prev => !prev);
    console.log(passwordRef.current.type);
  };

  const onSignin = e => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="form-column column">
      <div className="heading">
        <h2>Welcome Back</h2>
        <span className="fw-semi-bold">Sign in to your admin console</span>
      </div>

      <form ref={form} onSubmit={onSignin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            ref={emailRef}
            placeholder="john@gmail.com"
            required
            pattern="[a-zA-Z0-9 -_.]+@[a-zA-Z0-9 -_.]+\.[a-z]{2,}"
            onInvalid={e => {
              e.target.setCustomValidity("Enter a valid email address");
            }}
            onInput={e => {
              e.target.setCustomValidity("");
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="your password"
            required
            pattern="[a-zA-Z0-9 +-/.#!]{6,}"
            onInvalid={e => {
              e.target.setCustomValidity("Password must be at least 6 characters");
            }}
            onInput={e => {
              e.target.setCustomValidity("");
            }}
          />
          {showPassword ? (
            <span className="show icon" onClick={handleClick} title="Hide Password">
              <AiOutlineEye size="20" />
            </span>
          ) : (
            <span className="hide icon" onClick={handleClick} title="Show Password">
              <AiOutlineEyeInvisible size="20" />
            </span>
          )}
        </div>

        <Link to="/forgot-password" className="forgot-password">
          Forgot Password?
        </Link>

        <button type="submit" className="signin">
          Log me in
        </button>
      </form>
    </div>
  );
}

export default Form;
