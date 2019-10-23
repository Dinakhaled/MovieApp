import { CURRENT_TAP } from "../types";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const INITIAL_STATE = {
  tap: {
    id: 1,
    name: "Popular",
    api: "popular",
    icon: faHeart
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_TAP:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
