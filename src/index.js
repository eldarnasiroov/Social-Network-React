import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Redux/redux-store";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
export const rerender = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}
rerender(store.getState());
store.subscribe(() => rerender(store.getState()));