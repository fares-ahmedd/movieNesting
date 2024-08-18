import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { genresCall, getUrl } from "./store/slices/homeSlice.js";

store.dispatch(genresCall());
store.dispatch(getUrl());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
