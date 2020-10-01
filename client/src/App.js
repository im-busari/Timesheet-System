import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Sets up the base axios configuration
import "./config/axios";
import React from "react";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
