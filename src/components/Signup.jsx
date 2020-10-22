import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const [user, setUser] = useState([]);
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    password: "",
    phonenumber: "",
    email: "",
  });

  const { push } = useHistory();

  const handleChange = (e) => {
    console.log(e.target.name, ":", e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://water-myplants.herokuapp.com/api/auth/register", values)
      .then((res) => {
        console.log(res, "res inside handleSubmit signup form");
        setUser(res.data);
        push("/login");
      })
      .catch((err) => {
        console.log(err, "error in signing up form");
      });
  };

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit}>
        <h1>Get started with us Today Create Your account</h1>
        <div className="form-inputs">
          <label htmlFor="fullname" className="form-label">
            Fullname
          </label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your Fullname"
            value={values.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Your username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            name="password"
            placeholder="Enter Your password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="PhoneNumber" className="form-label">
            PhoneNumber
          </label>
          <input
            type="text"
            name="phonenumber"
            placeholder="Enter Your Phone Number"
            value={values.phonenumber}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default Signup;
