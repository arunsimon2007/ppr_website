/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from "react";

import { render } from "react-dom";
import { Provider } from "react-redux";
import Routers from "./router";
import configureStore from "./redux/store";

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

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("app")
);
