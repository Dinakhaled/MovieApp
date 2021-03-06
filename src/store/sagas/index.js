import { takeEvery } from "redux-saga/effects";
import * as types from "../types";
import {
  fetchGenresSaga,
  fetchMoviesSaga,
  fetchMovieSaga,
  fetchCreditsSaga,
  fetchRecommendedMovieSaga,
  fetchPersonSaga
} from "./movies";

export function* watchAll() {
  yield takeEvery(types.FETCH_GENRES_REQUEST, fetchGenresSaga);
  yield takeEvery(types.FETCH_MOVIES_REQUEST, fetchMoviesSaga);
  yield takeEvery(types.SINGLE_MOVIE_REQUEST, fetchMovieSaga);
  yield takeEvery(types.FETCH_CREDITS_REQUEST, fetchCreditsSaga);
  yield takeEvery(types.RECOMMENDED_MOVIES_REQUEST, fetchRecommendedMovieSaga);
  yield takeEvery(types.FETCH_PERSON_REQUEST, fetchPersonSaga);
}
