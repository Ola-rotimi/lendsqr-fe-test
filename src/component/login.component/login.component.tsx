import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import "./login.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
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
      </form>
    </div>
  );
};

export default SignIn;
