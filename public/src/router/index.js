import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./home"
import NoMatch from "Components/nomatch"

const routers = [
  { path: "/", component: Home },
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
