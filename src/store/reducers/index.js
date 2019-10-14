import { combineReducers } from "redux";
import genres from "./Genres";
import currentTap from "./currentTap";
import movies from "./Movies";

export default combineReducers({
  genres,
  currentTap,
  movies
});
