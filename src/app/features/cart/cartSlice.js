import { createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      itemID: 0,
      title: "",
      price: 0,
      amount: 0,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseAmount: (state, action) => {
      const foundValue = state.find((value) => value.id === action.payload);
      if (foundValue) {
        console.log("FOUND");
      }
    },
    decreaseAmount: (state) => {
      state.amount--;
    },
    addToCart: (state, action) => {
      state.cart.push({
        itemID: action.payload.itemID,
        title: action.payload.title,
        amount: action.payload.amount,
      });
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, increaseAmount, decreaseAmount, checkAmount } =
  cartSlice.actions;
