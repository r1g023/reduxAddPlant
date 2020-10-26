import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

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
    axiosWithAuth()
      .post("api/auth/login", login)
      .then((res) => {
        console.log(res, "post LOGIN credentials passed");
        setUser(res.data);
        window.localStorage.setItem("token", res.data.token);
        push("/plant-list");
      })
      .catch((err) => {
        console.log(err, "error LOGIN in");
      });
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
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
