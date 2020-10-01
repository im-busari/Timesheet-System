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
import { CreateTimesheet } from "./Pages";
import { EditTimesheet } from "./Pages";

export const AppRoutes = () => {
  const Home = () => {
    return <div>Yo</div>;
  };

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={EditTimesheet} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/timesheets/create" component={CreateTimesheet} />
      </Switch>
    </Router>
  );
};
