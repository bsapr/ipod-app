import React from "react";
import { connect } from "react-redux";
import { Consumer } from "react-redux";
import { StoreContext } from "../index";
class Home extends React.Component {
  render() {
    console.log("Home Position : ", this.props.store.getState());
    const { homePosition } = this.props.store.getState();
    return (
      <div id="screenList-body">
        <div id="screenList">
          {homePosition === 1 ? (
            <div
              className="screenListItem"
              style={{ backgroundColor: "#7575e2", color: "white" }}
            >
              Now Playing
            </div>
          ) : (
            <div className="screenListItem">Now Playing</div>
          )}
          {homePosition === 2 ? (
            <div
              className="screenListItem"
              style={{ backgroundColor: "#7575e2", color: "white" }}
            >
              Music
            </div>
          ) : (
            <div className="screenListItem">Music</div>
          )}
          {homePosition === 3 ? (
            <div
              className="screenListItem"
              style={{ backgroundColor: "#7575e2", color: "white" }}
            >
              Game
            </div>
          ) : (
            <div className="screenListItem">Game</div>
          )}
          {homePosition === 4 ? (
            <div
              className="screenListItem"
              style={{ backgroundColor: "#7575e2", color: "white" }}
            >
              Game
            </div>
          ) : (
            <div className="screenListItem">Game</div>
          )}
        </div>

        <div id="screenImage"></div>
      </div>
    );
  }
}

class HomeWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <Home store={store} />}
      </StoreContext.Consumer>
    );
  }
}
export default HomeWrapper;

// function callback(state) {
//   return {
//     homePosition: state.homePosition,
//   };
// }
// const connectedComponent = connect(callback)(Home);
// export default connectedComponent;
