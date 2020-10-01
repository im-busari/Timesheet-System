import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { CreateTimesheet, EditTimesheet } from "./Pages";

function App() {
  return (
    <>
      <Navigation />
      <EditTimesheet />
    </>
  );
}

export default App;
