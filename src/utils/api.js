import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
export const URL = "https://image.tmdb.org/t/p/original/";

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

export async function genresCall() {
  let promises = [];
  let endPoints = ["tv", "movie"];
  let allGenres = {};

  endPoints.forEach((url) => {
    promises.push(fetchData(`/genre/${url}/list`));
  });

  const data = await Promise.all(promises);
  data.forEach(({ genres }) => {
    return genres.forEach((item) => (allGenres[item.id] = item));
  });

  return allGenres;
}
