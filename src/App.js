import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import "./index.css";

function App() {
  // const [currentUser, setCurrentUser] = useState();

  // const [plants, setPlants] = useState([]);

  // const [login, setLogin] = useState({
  //   username: "",
  //   password: "",
  // });

  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123",
  // };
  // const [user, setUser] = useState({ name: "", email: "" });
  // const [error, setError] = useState("");
  // const Login = (details) => {
  //   console.log(details);
  // };

  // const LogOut = () => {
  //   console.log("logout");
  // };
  return (
    <div className="App">
      <NavigationBar />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>

      {/* {user.email != "" ? (
        <div className="welcome"> 
          <h2>
            welcome,<span>{user.name}</span>
          </h2>
          <button>LogOut</button>
        </div>
      ) : (
    
      )} */}
    </div>
  );
}

export default App;
