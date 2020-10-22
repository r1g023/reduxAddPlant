import React, { useState } from "react";
import LoginForm from "./components/LoginForm.js";
import NavigationBar from "./components/NavigationBar";
import { Route, Link, Switch } from "react-router-dom";
import FormSignup from "./components/FormSignup";
import "./App.css";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);
  };

  const LogOut = () => {
    console.log("logout");
  };
  return (
    <div className="App">
      <NavigationBar />

      <Switch>
        <Route path="/signup" component={FormSignup} />
        <Route path="/login" component={LoginForm} />
        <Route component={Login} />
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
