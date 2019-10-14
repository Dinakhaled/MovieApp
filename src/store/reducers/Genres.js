import { FETCH_GENRES } from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
