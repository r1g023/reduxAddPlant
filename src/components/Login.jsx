import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loginform from "./LoginForm";

const Login = (props) => {
  const [user, setUser] = useState([]);

  const [login, setLogin] = useState({ username: "", password: "" });

  const { push } = useHistory();

  const handleChanges = (e) => {
    console.log(e.target.name, ":", e.target.value);
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="signup-header">Login Please</h1>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          Username:
          <div className="form-inputs">
            <input
              type="text"
              name="username"
              placeholder="Enter Your username"
              value={login.username}
              onChange={handleChanges}
            />
          </div>
          Password:
          <div className="form-inputs">
            <input
              type="text"
              name="password"
              placeholder="Enter Your password"
              value={login.password}
              onChange={handleChanges}
            />
          </div>
          <button className="form-input-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
