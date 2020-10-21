
import React, {useState, useEffect} from 'react';
import Header from "../src/components/Header/Header"
import PlantCard from "./components/PlantCard"
import PlantList from "./components/PlantList"
import "./components/styles.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegistrationForm from './components/Header/RegistrationForm';
import LoginForm from './components/LoginForm';





function App() {

return (
    <Router>
    <div className="App">
      {/* <Header/> */}
     
      
      <RegistrationForm />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              
            
            </Route>
          </Switch>
       </div>
   </div>
  </Router>
  )  
}
export default App

import React, { useState } from "react";
import LoginForm from "./components/LoginForm.js";
import NavigationBar from "./components/NavigationBar";
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
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            welcome,<span>{user.name}</span>
          </h2>
          <button>LogOut</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
