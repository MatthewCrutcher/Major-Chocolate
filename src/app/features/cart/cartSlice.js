import { createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
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

      foundValue.calcPrice = foundValue.initialPrice * foundValue.amount;
      state.totalPrice += foundValue.initialPrice;
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
      foundValue.calcPrice -= foundValue.initialPrice;
      state.totalPrice -= foundValue.initialPrice;
    },
    totalCartPrice: (state) => {
      return state.totalPrice + 6;
    },
    addToCart: (state, action) => {
      state.cart.push({
        itemID: action.payload.itemID,
        title: action.payload.title,
        amount: action.payload.amount,
        initialPrice: action.payload.initialPrice,
        calcPrice: action.payload.calcPrice,
      });
      state.totalPrice += action.payload.calcPrice;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  increaseAmount,
  decreaseAmount,
  checkAmount,
  totalCartPrice,
} = cartSlice.actions;
