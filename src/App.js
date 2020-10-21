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