import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./Redux/state";
import { BrowserRouter } from "react-router-dom";


export const rerender = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App postsData={state.postsData} dialogsData={state.dialogsData} messagesData={state.messagesData} addPost={addPost} />
      </BrowserRouter>
    </React.StrictMode>
  );
}