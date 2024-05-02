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

export const genresCall = async () => {
  const endpoints = ["tv", "movie"];
  const requests = endpoints.map((endpoint) =>
    fetchData(`/genre/${endpoint}/list`)
  );
  const responses = await Promise.all(requests);

  const allGenres = responses.reduce((acc, { genres }) => {
    genres.forEach((genre) => {
      acc[genre.id] = genre;
    });
    return acc;
  }, {});

  return allGenres;
};
