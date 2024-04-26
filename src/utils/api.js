import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  authorization: `bearer ${TMDB_TOKEN}`,
};

export async function fetchData(url, params) {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
