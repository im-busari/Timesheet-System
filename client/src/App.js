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
      <LoginPage />
      <RegisterPage />
      <Navigation />
      <Title color="yellow" text="Sample Title"></Title>
    </>
  );
}

export default App;
