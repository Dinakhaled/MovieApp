import { put, call } from "redux-saga/effects";
import API from "../../network/apis";
import {
  fetchGenres,
  fetchMovies,
  fetchMovie,
  fetchCredits,
  fetchRecommendedMovies,
  fetchPerson
} from "../actions";

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
  try {
    const response = yield call(API.getMovie, id);
    yield put(fetchMovie(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchCreditsSaga({ id }) {
  try {
    const response = yield call(API.getcredits, id);
    yield put(fetchCredits(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchRecommendedMovieSaga({ id }) {
  try {
    const response = yield call(API.getRecommendMovies, id);
    yield put(fetchRecommendedMovies(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchPersonSaga({ id }) {
  try {
    const response = yield call(API.getPerson, id);
    yield put(fetchPerson(response.data));
  } catch (err) {
    console.log(err);
  }
}
