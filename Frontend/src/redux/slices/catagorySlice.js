import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  catagories: [],
  products : []
};

const url =
  "https://dell-clone-default-rtdb.asia-southeast1.firebasedatabase.app/catagories.json";

export const getCatagory = createAsyncThunk("GET_CATAGORY", async () => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
  
});

export const catagoriesSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCatagory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCatagory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.catagories = action.payload;
    });

    builder.addCase(getCatagory.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default catagoriesSlice.reducer;

