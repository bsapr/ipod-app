import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeList from "./reducers";

import App from "./components/App";

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // my middlware
  console.log("ACTION", action);
  console.log("STATE IN APP", store.getState().homePosition);
  next(action);
};

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}
const store = createStore(homeList, applyMiddleware(logger, thunk));
export const StoreContext = createContext();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
