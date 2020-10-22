import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://water-myplants.herokuapp.com/",
    headers: {
      authorization: token,
    },
  });
};
