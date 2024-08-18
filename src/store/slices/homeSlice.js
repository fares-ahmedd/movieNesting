import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../utils/api";

export const getUrl = createAsyncThunk("home/getUrl", async function () {
  try {
    const response = await fetchData("/configuration");
    const url = `${response.images.secure_base_url}original`;

    return url;
  } catch (error) {
    console.log(error);
  }
});

export const genresCall = createAsyncThunk("home/genresCall", async () => {
  const endpoints = ["tv", "movie"];

  try {
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
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  url: "",
  genres: {},
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getApiConfig: (state, action) => {
      state.url = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder

      .addCase(getUrl.fulfilled, (state, action) => {
        state.url = action.payload;
      })
      .addCase(getUrl.rejected, (state) => {
        console.log(state);
      })
      .addCase(genresCall.fulfilled, (state, action) => {
        state.genres = action.payload;
      }),
});

export const { getApiConfig } = homeSlice.actions;

export const selectUrl = (state) => state.home.url;
export const selectGenres = (state) => state.home.genres;

export default homeSlice.reducer;
