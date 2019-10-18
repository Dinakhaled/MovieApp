import { SEARCH_KEYWORD } from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_KEYWORD:
      return action.payload;
    default:
      return state;
  }
};
