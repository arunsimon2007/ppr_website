import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import RouterConfig from "./router";
import configureStore from "./redux/store";

import "./app.scss";
class App extends Component {
  render() {
    return (
      <Fragment>
        <RouterConfig />
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
