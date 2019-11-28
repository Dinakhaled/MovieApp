import axios from "axios";
import { successHandler, errorHandler, requestHandler } from "../interceptors";

export const axiosInstance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "2fbdb6b89a7ce56a574f8d6328b92a72"
  }
});

axiosInstance.interceptors.request.use(request => requestHandler(request));
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

const checkMoviesRequest = (params, type) => {
  switch (true) {
    case !params.with_genres && !params.query:
      return `/movie/${type}`;
    case params.query && !params.with_genres:
      return `/search/movie/`;
    default:
      return `discover/movie`;
  }
};

const getGenre = async () => {
  return await axiosInstance.get(`/genre/movie/list`, {
    handlerEnabled: false
  });
};

const getMovies = async (type, params) => {
  return await axiosInstance.get(`${checkMoviesRequest(params, type)}`, {
    params: {
      ...params
    }
  });
};

const getMovie = async id => {
  return await axiosInstance.get(`/movie/${id}`, {
    params: {
      append_to_response: "videos"
    }
  });
};

const getRecommendMovies = async (id, params) => {
  return await axiosInstance.get(`/${id}/recommendations`, {
    params: {
      ...params
    }
  });
};

const getcredits = async id => await axiosInstance.get(`/movie/${id}/credits`);

const getPerson = async id => await axiosInstance.get(`/person/${id}`);

export default {
  getGenre,
  getMovies,
  getMovie,
  getcredits,
  getRecommendMovies,
  getPerson
};
