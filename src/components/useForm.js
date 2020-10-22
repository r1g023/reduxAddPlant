import React, { useState, useEffect } from "react";
// import Validateform from "./Validateform";
import axios from "axios";

const useForm = (callback, Validateform) => {
  const { user, setUser } = useState();

  const [values, setValues] = useState({
    fullname: "",
    username: "",
    password: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    console.log(
      e.target.name,
      ":",
      e.target.value,
      "handleCHANGE in FormSignup"
    );
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(Validateform(values));
    // setIsSubmitting(true);

    axios
      .post("https://water-myplants.herokuapp.com/api/auth/register", values)
      .then((res) => {
        console.log(res, "res inside handleSubmit signup form");
        setUser(res);
      })
      .catch((err) => {
        console.log(err, "error in signing up form");
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
