import React, { useState } from "react";
import LoginForm from "./components/LoginForm.js";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import FormSignup from "./components/FormSignup";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState();

  const [plants, setPlants] = useState([]);
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
    <BrowserRouter>
      <div className="App">
        <NavigationBar />

        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/signup">
            <FormSignup setCurrentUser={setCurrentUser} />
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
    </BrowserRouter>
  );
}

export default App;
