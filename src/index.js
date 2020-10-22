import React from "react";
import ReactDOM from "react-dom";

import App from "../src/App";
import { root } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { BrowserRouter } from "react-router-dom";

const store = createStore(root, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
