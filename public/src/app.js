/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import Routers from "./router";

import "./app.scss";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Routers />
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
