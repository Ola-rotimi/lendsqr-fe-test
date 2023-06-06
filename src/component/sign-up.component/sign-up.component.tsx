import React, { useState } from "react";
import auth from "../../utils/firebase.utils/firebase";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  //handle Submit and Sign Up
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisplayName("");
    setEmail("");
    setPassword("");
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setIsSignUp(true);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    } catch (error) {
      console.log(error);
    }
  };

  //handle input page
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    name === "displayName"
      ? setDisplayName(value)
      : name === "email"
      ? setEmail(value)
      : setPassword(value);
  };

  //handle show password
  const toggleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  //render
  return (
    <div className="sign-up">
      {isSignUp ? (
        <Link to="/">Login</Link>
      ) : (
        <div className="sign-up">
          <h1>Welcome!</h1>
          <span>Enter details to sign up</span>
          <form onSubmit={handleSubmit}>
            <div className="display-name">
              <FormInput
                name="displayName"
                type="text"
                value={displayName}
                handleChange={handleChange}
                required
                label="Display Name"
              />
            </div>
            <FormInput
              name="email"
              type="email"
              value={email}
              handleChange={handleChange}
              required
              label="Email"
            />
            <div className="password-container">
              <FormInput
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                handleChange={handleChange}
                required
                label="Password"
              />
              <button className="show-password" onClick={toggleShowPassword}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button type="submit" className="submit">
              Sign Up
            </button>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
