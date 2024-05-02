import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../utils/api";

export const getInitialPoster = createAsyncThunk(
  "home/getInitialPoster",
  async function () {
    try {
      const response = await fetchData("/configuration");
      const url = `${response.images.secure_base_url}original`;

      return url;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  url: {},
  genres: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getApiConfig: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getInitialPoster.pending, (state) => {
        console.log(state);
      })
      .addCase(getInitialPoster.fulfilled, (state, action) => {
        state.url = action.payload;
      })
      .addCase(getInitialPoster.rejected, (state) => {
        console.log(state);
      }),
});

export const { getApiConfig, getGenres } = homeSlice.actions;

export default homeSlice;
