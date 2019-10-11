import { put, call } from "redux-saga/effects";
import API from "../../network/apis";
import { fetchGenres } from "../actions";

export function* fetchGenresSaga() {
  try {
    const response = yield call(API.getGenre);
    yield put(fetchGenres(response.data));
  } catch (err) {
    console.log(err);
  }
}
