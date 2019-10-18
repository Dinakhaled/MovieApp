import {
  FETCH_GENRES,
  FETCH_GENRES_REQUEST,
  CURRENT_TAP,
  FETCH_MOVIES,
  FETCH_MOVIES_REQUEST,
  SEARCH_KEYWORD
} from "../types";

export const fetchGenres = genres => ({
  type: FETCH_GENRES,
  payload: genres
});

export const fetchGenresReq = () => ({ type: FETCH_GENRES_REQUEST });

export const fetchMovies = movies => ({
  type: FETCH_MOVIES,
  payload: movies
});

export const fetchMoviesReq = (getBy, params) => ({
  type: FETCH_MOVIES_REQUEST,
  params,
  getBy
});

export const currentTap = currentTap => ({
  type: CURRENT_TAP,
  payload: currentTap
});

export const searchKeyword = searchKeyword => ({
  type: SEARCH_KEYWORD,
  payload: searchKeyword
});
