import React, { Component } from "react";
import Wheel from "./Wheel";
class Controller extends Component {
  render() {
    return (
      <div id="controller">
        <Wheel />
        <div id="select"></div>
      </div>
    );
  }
}
export default Controller;
