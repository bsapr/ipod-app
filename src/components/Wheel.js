import React from "react";
class Wheel extends React.Component {
  render() {
    return (
      <div id="wheel">
        <div id="menu">MENU</div>
        <div id="backward">
          <i className="fas fa-fast-backward"></i>
        </div>
        <div id="forward">
          <i className="fas fa-fast-forward"></i>
        </div>
        <div id="play-pause">
          <i className="fas fa-play"></i>
          <i className="fas fa-pause"></i>
        </div>
      </div>
    );
  }
}
export default Wheel;
