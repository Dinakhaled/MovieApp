import * as types from "../types";

export const fetchGenres = genres => ({
  type: types.FETCH_GENRES,
  payload: genres
});

export const fetchGenresReq = () => ({ type: types.FETCH_GENRES_REQUEST });

export const fetchMovies = movies => ({
  type: types.FETCH_MOVIES,
  payload: movies
});

export const fetchMoviesReq = (getBy, params) => ({
  type: types.FETCH_MOVIES_REQUEST,
  params,
  getBy
});

export const currentTap = currentTap => ({
  type: types.CURRENT_TAP,
  payload: currentTap
});

export const searchKeyword = searchKeyword => ({
  type: types.SEARCH_KEYWORD,
  payload: searchKeyword
});

export const loader = state => ({
  type: types.SHOW_LOADER,
  payload: state
});

export const sortBy = state => ({
  type: types.SORT_BY,
  payload: state
});

export const fetchMovie = movie => ({
  type: types.SINGLE_MOVIE,
  payload: movie
});

export const fetchMovieRequest = id => ({
  type: types.SINGLE_MOVIE_REQUEST,
  id
});

export const fetchCredits = credits => ({
  type: types.FETCH_CREDITS,
  payload: credits
});

export const fetchCreditsRequest = id => ({
  type: types.FETCH_CREDITS_REQUEST,
  id
});
