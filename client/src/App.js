import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { Navigation } from "./components/Navigation";
import { Title } from "./components/generic/Title";

function App() {
  return (
    <>
      <Navigation />
      <LoginPage />
      <RegisterPage />
    </>
  );
}

export default App;
