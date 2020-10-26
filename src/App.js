import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import PlantList from "./components/PlantList";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddPlant from "./components/AddPlant";
import DynamicPlantCard from "./components/DynamicPlantCard";
import EditPlant from "./components/EditPlant";
import PrivateRoute from "./utils/PrivateRoute";

import "./index.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/plant-list/:itemID" component={DynamicPlantCard} />

        <PrivateRoute path="/plant-list" component={PlantList} />

        <PrivateRoute path="/add-plant" component={AddPlant} />

        <PrivateRoute path="/edit-plant/:itemID" component={EditPlant} />
      </Switch>
    </div>
  );
}

export default App;

// DELETE PLANT: https://water-myplants.herokuapp.com/api/plants/:id
// FIND PLANT BY ID: https://water-myplants.herokuapp.com/api/plants/:id
// ADD PLANT: https://water-myplants.herokuapp.com/api/plants
// UPDATE PLANT: https://water-myplants.herokuapp.com/api/plants/:id
