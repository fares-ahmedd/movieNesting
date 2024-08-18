import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice";
import detailsReducer from "./slices/detailsSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer,
  },
});
