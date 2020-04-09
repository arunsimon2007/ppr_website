import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Contact from "./contact"
import Gallery from "./gallery"
import Home from "./home"
import Social from "./social"
import NoMatch from "./../components/nomatch"
import Layout from "./../components/Layout"

const routers = [
  { path: "/", component: Home },
  { path: "/gallery", component: Gallery },
  { path: "/contact", component: Contact },
  { path: "/social", component: Social },
  { path: "/layout", component: Layout },
  { path: "*", component: NoMatch },
]

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
