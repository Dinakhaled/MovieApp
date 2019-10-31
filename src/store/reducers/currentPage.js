import {  CURRENT_PAGE } from "../types";

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.payload ;
    default:
      return state;
  }
};
