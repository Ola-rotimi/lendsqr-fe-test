import React, { useState } from "react";
import { createUser } from "../../utils/firebase.utils/firebase";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    createUser(email, password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const toggleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-up">
      <h1>Welcome!</h1>
      <span>Enter details to sign up</span>
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
        <button type="submit" className="submit">
          Sign Up
        </button>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
