import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { Navigation } from "./components/Navigation";
import { AllTimesheetsPage } from "./pages/AllTimesheets";

export const AppRoutes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={AllTimesheetsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
};
