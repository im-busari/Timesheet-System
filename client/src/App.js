import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Sets up the base axios configuration
import "./config/axios";
import React from "react";
import { AppRoutes } from "./AppRoutes";
import { useCheckSession } from "./hooks";
import { useSelector } from "react-redux";

function App() {
  useCheckSession();
  const isSessionChecked = useSelector((state) => state.auth.isSessionChecked);

  if (!isSessionChecked) {
    return null;
  }

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
