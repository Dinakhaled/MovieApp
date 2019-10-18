import { combineReducers } from "redux";
import genres from "./Genres";
import currentTap from "./currentTap";
import movies from "./Movies";
import searchKeyword from "./searchKeyword";

export default combineReducers({
  genres,
  currentTap,
  movies,
  searchKeyword
});
