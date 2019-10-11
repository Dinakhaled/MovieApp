import { FETCH_GENRES, FETCH_GENRES_REQUEST } from "../types";

export const fetchGenres = genres => ({
  type: FETCH_GENRES,
  payload: genres
});

export const fetchGenresReq = () => ({ type: FETCH_GENRES_REQUEST });
