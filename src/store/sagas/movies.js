import { put, call } from "redux-saga/effects";
import API from "../../network/apis";
import { fetchGenres, fetchMovies } from "../actions";

export function* fetchGenresSaga() {
  try {
    const response = yield call(API.getGenre);
    yield put(fetchGenres(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchMoviesSaga({ params }) {
  try {
    if (params) {
      const response = yield call(API.getMovies, params);
      yield put(fetchMovies(response.data));
    }
  } catch (err) {
    console.log(err);
  }
}
