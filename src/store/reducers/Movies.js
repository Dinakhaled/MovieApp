import { FETCH_MOVIES } from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
