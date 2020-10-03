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
import { AllTimesheetsPage } from "./Pages";
import { CreateTimesheet } from "./Pages";
import { EditTimesheet } from "./Pages";

import { useSelector } from "react-redux";

export const AppRoutes = () => {
  const currentUserId = useSelector((state) => state.auth?.userId);
  const guestRedirect = <Redirect to="/login" />;
  const authRedirect = <Redirect to="/" />;

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          {currentUserId ? <AllTimesheetsPage /> : guestRedirect}
        </Route>
        <Route exact path="/timesheets/edit/:timesheetId">
          {currentUserId ? <EditTimesheet /> : guestRedirect}
        </Route>
        <Route exact path="/timesheets/create">
          {currentUserId ? <CreateTimesheet /> : guestRedirect}
        </Route>
        <Route exact path="/login">
          {currentUserId ? authRedirect : <LoginPage />}
        </Route>
        <Route exact path="/register">
          {currentUserId ? authRedirect : <RegisterPage />}
        </Route>
      </Switch>
    </Router>
  );
};
