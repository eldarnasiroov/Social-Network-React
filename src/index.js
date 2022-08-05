import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Redux/store";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
export const rerender = (store) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
          state={store._state}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}
rerender(store);
store.subscribe(rerender);