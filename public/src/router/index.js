/* eslint-disable no-unused-vars */

import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Contact from "./contact";
import Gallery from "./gallery";
import Home from "./home";
import Social from "./social";
import NoMatch from "./../components/nomatch";

const routers = [
  { path: "/", component: Home },
  { path: "/gallery", component: Gallery },
  { path: "/contact", component: Contact },
  { path: "/social", component: Social },
  { path: "*", component: NoMatch }
];



const RouterConfig = () => {
  return (
    <Router>
      <Switch>
        {routers.map((route, i) => (
          <Route key={i} exact path={route.path} component={route.component} />
        ))}

        <Route path={"*"} component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
