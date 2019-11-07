/* eslint-disable no-unused-vars */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routers from "./routers";
import NoMatch from "./../components/nomatch";

export default () => {
  return (
    <Router>
      <Switch>
        {routers.map((route, i) => (
          <Route key={i} exact path={route.path} component={route.component} />
        ))}

        <Route path={"*"} component={NoMatch} />
      </Switch>
    </Router>
  );
};
