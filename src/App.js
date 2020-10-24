import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import "./index.css";

function App() {
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
    </div>
  );
}

export default App;
