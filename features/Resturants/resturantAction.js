import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getResturantsList = createAsyncThunk(
  "getResturantsList",
  async (undefined, { rejectWithValue }) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products`);
      // console.log(res);
      return res.data?.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(null);
    }
  }
);
