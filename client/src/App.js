import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";

function App() {
  return (
    <div className="App">
      <LoginPage />
      <RegisterPage />
    </div>
  );
}

export default App;
