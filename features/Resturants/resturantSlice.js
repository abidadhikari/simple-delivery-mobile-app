import { createSlice } from "@reduxjs/toolkit";
// import { getResturantsList } from "./resturantAction";

const initialState = {
  value: 0,
  resturant: [],
  loading: false,
};

export const resturantSlice = createSlice({
  name: "resturant",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getResturantsList.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(getResturantsList.fulfilled, (state, payload) => {
  //     state.resturant = payload;
  //   });
  //   builder.addCase(getResturantsList.rejected, (state) => {
  //     state.loading = false;
  //   });
  // },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  resturantSlice.actions;

export default resturantSlice.reducer;
