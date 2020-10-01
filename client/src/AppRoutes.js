import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { LoginPage } from "./Pages";
import { RegisterPage } from "./Pages";
import { Navigation } from "./components/Navigation";
import { AllTimesheetsPage } from "./pages/AllTimesheets";
import { CreateTimesheet } from "./Pages";
import { EditTimesheet } from "./Pages";

export const AppRoutes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={AllTimesheetsPage} />
        <Route exact path="/timesheets/edit" component={EditTimesheet} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/timesheets/create" component={CreateTimesheet} />
      </Switch>
    </Router>
  );
};
