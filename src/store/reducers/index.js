import { combineReducers } from "redux";
import genres from "./Genres";
import currentTap from "./currentTap";
import movies from "./Movies";
import searchKeyword from "./searchKeyword";
import loader from "./Loading";
import sortBy from "./sortBy";
import credits from "./credits";
import currentPage from "./currentPage";
import person from "./person";
import errorMessage from "./error";

export default combineReducers({
  genres,
  currentTap,
  movies,
  searchKeyword,
  loader,
  sortBy,
  credits,
  currentPage,
  person,
  errorMessage
});
