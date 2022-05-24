import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import Router from "./router/router";

function App() {
  return (
    <>
      <ToastContainer limit={3} autoClose={2000} newestOnTop={true} />
      <Router />
    </>
  );
}

export default App;
