import React from "react";
import Header from "./Header";
import Home from "./Home";
import { connect } from "react-redux";

class Screen extends React.Component {
  render() {
    return (
      <div id="screen">
        <Header />
        <Home />
      </div>
    );
  }
}

// function callback(state) {
//   return {
//     homePosition: state.homePosition,
//   };
// }
// const connectedComponent = connect(callback)(Screen);
// export default connectedComponent;
export default Screen;
