import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "2fbdb6b89a7ce56a574f8d6328b92a72"
  }
});

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

const getGenre = async () => await axiosInstance.get(`/genre/movie/list`);
const getMovies = async (type, params) => {
  return await axiosInstance.get(`${checkMoviesRequest(params, type)}`, {
    params: {
      ...params
    }
  });
};

export default { getGenre, getMovies };
