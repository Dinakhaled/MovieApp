import { put, call } from "redux-saga/effects";
import API from "../../network/apis";
import { fetchGenres, fetchMovies, fetchMovie } from "../actions";

export function* fetchGenresSaga() {
  try {
    const response = yield call(API.getGenre);
    yield put(fetchGenres(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchMoviesSaga({ getBy, params }) {
  try {
    const response = yield call(API.getMovies, getBy, params);
    yield put(fetchMovies(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchMovieSaga({ id }) {
  console.log(id);

  try {
    const response = yield call(API.getMovie, id);
    yield put(fetchMovie(response.data));
  } catch (err) {
    console.log(err);
  }
}
