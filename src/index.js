import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { cmoposedWithDevTools } from "redux-devtools-extension";
import App from "./App";
import rootReducer from "./reducer";
import { applyMiddleware } from "redux";

const composedEnhancer = cmoposedWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(
  rootReducer,
  composedEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
