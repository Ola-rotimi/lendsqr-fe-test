import React, { useState } from "react";
import auth from "../../utils/firebase.utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import "./login.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  //handle Submit and login
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setIsSignIn(true);
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
    } catch (error) {
      console.log(error);
    }
  };

  //handle input page
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  //handle show password
  const toggleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      {isSignIn ? (
        <div>Welcome</div>
      ) : (
        <div className="login">
          <h1>Welcome!</h1>
          <span>Enter details to login</span>
          <form onSubmit={handleSubmit}>
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
            <button type="button" className="forgot">
              Forgot Password?
            </button>
            <button type="submit" className="submit">
              Sign In
            </button>
            <p>
              Dont have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;
