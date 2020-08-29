import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.state = {
      time: time,
    };
  }
  refreshTime = () => {
    let today = new Date();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.setState({ time: time });
  };
  componentDidMount = () => {
    setInterval(this.refreshTime, 1000);
  };
  render() {
    return (
      <div className="header">
        <span>
          <span>iPod</span>
          <i class="fas fa-wifi"></i>
        </span>
        <span>{this.state.time}</span>
        <span>
          <i class="fas fa-battery-three-quarters green"></i>
        </span>
      </div>
    );
  }
}
export default Header;
