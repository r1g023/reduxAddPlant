import React, {useState} from 'react';
import Header from "../src/components/Header/Header"


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
      <Header/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              {/* <RegistrationForm /> */}
              <LoginForm />
            </Route>
          </Switch>
       </div>
   </div>
  </Router>
  )  
}
export default App