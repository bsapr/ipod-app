import { INCREMENT_HOME_POSITION, DECREMENT_HOME_POSITION } from "../actions";

const initialScreenListState = {
  homePosition: 3,
};

export default function homeList(state = initialScreenListState, action) {
  console.log("In reducer ", action.type);
  switch (action.type) {
    case INCREMENT_HOME_POSITION:
      if (state.homePosition === 4) {
        return {
          ...state,
          homePosition: 1,
        };
      } else {
        return {
          ...state,
          homePosition: state.homePosition + 1,
        };
      }
    case DECREMENT_HOME_POSITION:
      if (state.homePosition === 1) {
        return {
          ...state,
          homePosition: 4,
        };
      } else {
        return {
          ...state,
          homePosition: state.homePosition - 1,
        };
      }
    default:
      return state;
  }
}
