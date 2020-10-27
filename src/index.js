import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";
import { plantReducer } from "./store/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(plantReducer, applyMiddleware(thunk));
console.log(store.getState(), "store global object");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
