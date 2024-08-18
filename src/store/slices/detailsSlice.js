import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../utils/api";

export const getMovieVideos = createAsyncThunk(
  "details/movieVideos",
  async ({ mediaType, id }) => {
    try {
      const res = await fetchData(`/${mediaType}/${id}/videos`);

      return res.results;
    } catch (error) {
      return error.message;
    }
  }
);

export const getMovieCredits = createAsyncThunk(
  "details/movieCredits",
  async ({ mediaType, id }) => {
    try {
      const res = await fetchData(`/${mediaType}/${id}/credits`);

      return res;
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = {
  videos: [],
  credits: [],
  isLoading: false,
  error: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,

  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(getMovieVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieVideos.fulfilled, (state, action) => {
        state.isLoading = false;

        state.videos = action.payload;
      })
      .addCase(getMovieVideos.rejected, (state) => {
        state.isLoading = false;

        state.error = "Something went wrong !";
      })
      .addCase(getMovieCredits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieCredits.fulfilled, (state, action) => {
        state.isLoading = false;

        state.credits = action.payload;
      })
      .addCase(getMovieCredits.rejected, (state) => {
        state.isLoading = false;

        state.error = "Something went wrong !";
      }),
});

export const selectMovieVideos = (state) => state.details.videos;
export const selectMovieVideo = (state) => state.details.videos[0];
export const selectMovieCredits = (state) => state.details.credits;

export default detailsSlice.reducer;
