import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Title } from "./components/generic/Title";

function App() {
  return (
    <>
      <Navigation />
      <Title color="yellow" text="Sample Title"></Title>
    </>
  );
}

export default App;
