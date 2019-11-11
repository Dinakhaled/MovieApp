import { ERROR_MESSAGE } from "../types";

const INITIAL_STATE = "";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
