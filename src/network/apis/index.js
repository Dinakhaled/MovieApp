import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "2fbdb6b89a7ce56a574f8d6328b92a72"
  }
});

const getGenre = async () => await axiosInstance.get(`/genre/movie/list`);
const getMovies = async (type, params) => {
  return await axiosInstance.get(
    `${
      params.with_genres === "" || params.with_genres === undefined
        ? `movie/${type}`
        : `discover/movie`
    }`,
    {
      params: {
        ...params
      }
    }
  );
};

export default { getGenre, getMovies };
