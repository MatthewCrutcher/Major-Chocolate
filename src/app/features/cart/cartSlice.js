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
      const foundValue = state.cart.find(
        (value) => value.itemID === action.payload
      );
      if (foundValue) {
        foundValue.amount++;
      }
    },
    decreaseAmount: (state, action) => {
      const foundValue = state.cart.find(
        (value) => value.itemID === action.payload
      );

      if (foundValue && foundValue.amount > 1) {
        foundValue.amount--;
      } else if (foundValue && foundValue.amount === 1) {
        state.cart.splice(
          state.cart.findIndex((value) => value.itemID === action.payload),
          1
        );
      }
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
