import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
// import resturantSlice from "./features/Resturants/resturantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    // resturant: resturantSlice,
  },
});
