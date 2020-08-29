export const INCREMENT_HOME_POSITION = "INCREMENT_HOME_POSITION";
export const DECREMENT_HOME_POSITION = "DECREMENT_HOME_POSITION";

export function incrementHomePosition() {
  return {
    type: INCREMENT_HOME_POSITION,
  };
}

export function decrementHomePosition() {
  return {
    type: DECREMENT_HOME_POSITION,
  };
}
