import { takeEvery } from "redux-saga/effects";
import * as types from "../types";
import { fetchGenresSaga, fetchMoviesSaga, fetchMovieSaga } from "./movies";

export function* watchAll() {
  yield takeEvery(types.FETCH_GENRES_REQUEST, fetchGenresSaga);
  yield takeEvery(types.FETCH_MOVIES_REQUEST, fetchMoviesSaga);
  yield takeEvery(types.SINGLE_MOVIE_REQUEST, fetchMovieSaga);
}
