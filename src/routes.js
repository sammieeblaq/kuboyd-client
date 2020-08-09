import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import SignIn from "./components/SignIn";

export default function routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}
