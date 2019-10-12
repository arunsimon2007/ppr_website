import React, { Component } from "react";
import ReactDom from "react-dom";
 
import "./app.scss";
class App extends Component {
  render = () => <p>Hello World...6</p>;
}

ReactDom.render(<App />, document.getElementById("app"));
