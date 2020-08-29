import React from "react";
import ZingTouch from "zingtouch";
import Screen from "./Screen";
import Controller from "./Controller";
import { appendScript } from "../utils/appendScript";
import { incrementHomePosition, decrementHomePosition } from "../actions";
import { Consumer } from "react-redux";
import { StoreContext } from "../index";

class App extends React.Component {
  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate());
    appendScript("https://kit.fontawesome.com/66b7ea86d8.js");
    var myElement = document.getElementById("wheel");
    var myRegion = new ZingTouch.Region(myElement);
    const wheelControll = this.wheelControll;
    myRegion.bind(myElement, "rotate", function (e) {
      wheelControll(e);
    });
  }

  wheelControll = (e) => {
    if (e.detail.distanceFromOrigin === 0) {
      this.angle = e.detail.angle;
    }
    if (Math.abs(this.angle - e.detail.angle) > 300) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast > 0) {
        this.updateActiveMenu(1);
      } else {
        this.updateActiveMenu(0);
      }
    } else if (Math.abs(this.angle - e.detail.angle) > 15) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast > 0) {
        this.updateActiveMenu(1);
      } else {
        this.updateActiveMenu(0);
      }
    }
  };

  updateActiveMenu = (value) => {
    if (value === 1) {
      this.props.store.dispatch(incrementHomePosition());
    } else {
      this.props.store.dispatch(decrementHomePosition());
    }
  };
  render() {
    console.log("APP POSITION: ", this.props.store.homePosition);
    return (
      <div id="container">
        <Screen />
        <Controller />
      </div>
    );
  }
}

class AppWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    );
  }
}
export default AppWrapper;
// function callback(state) {
//   return {
//     homePosition: state.homePosition,
//   };
// }
// const connectedComponent = connect(callback)(App);
// export default connectedComponent;
