import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import items from "../../../json-server/server";

const initialState = {
  loading: false,
  items: [],
  error: "",
};

export const fetchItems = createAsyncThunk("shop/fetchItems", () => {
  return items.get("/items").then((res) => res.data);
});

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.items = [];
      state.error = action.error.message;
    });
  },
});

export default shopSlice.reducer;
