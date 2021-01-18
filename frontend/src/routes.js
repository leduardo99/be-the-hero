import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

import store from "./store";
import history from "./services/history";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        store.getState().auth.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />

        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/incidents/new" component={NewIncident} />

        {/* <PrivateRoute path="/" exact component={() => <div>Home</div>} /> */}
      </Switch>
    </Router>
  );
}
