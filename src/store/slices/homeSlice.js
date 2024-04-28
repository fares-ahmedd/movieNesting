import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
  isScrolled: false,
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
    getIsScrolled: (state, action) => {
      state.isScrolled = action.payload;
    },
  },
});

export const { getApiConfig, getGenres, getIsScrolled } = homeSlice.actions;

export default homeSlice;
