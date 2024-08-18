import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_API_KEY = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;

export const URL = "https://image.tmdb.org/t/p/original/";
const headers = {
  Authorization: `bearer ${TMDB_TOKEN}`,
};

export async function fetchData(url, params) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${url}?api_key=${TMDB_API_KEY}`,
      {
        headers,
        params,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchPopularMovies() {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      headers: {
        accept: "application/json",
        Authorization: `bearer ${TMDB_TOKEN}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
