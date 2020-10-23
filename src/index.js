import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";
// import { plantReducer } from "./reducers";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";

// const store = createStore(plantReducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
