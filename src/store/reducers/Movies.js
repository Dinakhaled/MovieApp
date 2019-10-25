import * as types from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return { ...state, ...action.payload };
    case types.SINGLE_MOVIE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
