import React, { useState } from "react";
import { connect } from "react-redux";
import { userSignup } from "../actions/user";

const SignUpForm = ({ dispatch }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const resetState = () => {
    setEmail("");
    setName("");
    setPassword("");
  };
  const handleEmailChange = (e) => {
    e.persist();
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.persist();
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      if (email.includes("@") && name.length > 2 && password.length > 7) {
        dispatch(userSignup({ email, name, password }));
      }
      resetState();
    }
  };

  return (
    <div className="card-item-wrap">
      <div className="card-item">
        <form>
          <input
            className="add-card-input"
            type="text"
            name="email"
            onChange={handleEmailChange}
            value={email}
            placeholder="Enter email"
          />
          <input
            className="add-card-input"
            type="text"
            name="username"
            onChange={handleNameChange}
            value={name}
            placeholder="Enter full name"
            required
          />
          <input
            className="add-card-input"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            placeholder="Create password"
          />
          <button onClick={handleSubmit} className="add-list-btn" type="submit">
            Sign Up
          </button>
          <button className="close-add-btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default connect()(SignUpForm);