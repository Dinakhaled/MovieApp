import { SORT_BY } from "../types";

const INITIAL_STATE = "popularity.desc";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SORT_BY:
      return action.payload;
    default:
      return state;
  }
};
