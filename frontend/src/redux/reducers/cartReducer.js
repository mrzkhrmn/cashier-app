import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = {
  cartItems: [],
  itemsPrice: 0,
  paymentAmount: 0,
  remainingAmount: 0,
  changeAmount: 0,
  paymentHistory: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const itemExists = state.cartItems.find((i) => i.id === item.id);

      if (itemExists) {
        /*
        ****** IF YOU WANT TO UPDATE THE QUANTITY EACH CLICK USE THIS STATEMENT
        state.cartItems = state.cartItems.map((i) =>
          i.id === itemExists.id ? { ...i, quantity: i.quantity + 1 } : i
        ); 
        */
        state.cartItems = state.cartItems.map((i) =>
          i.id === item.id ? item : i
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    increaseItemQuantity: (state, action) => {
      const item = action.payload;

      const itemExists = state.cartItems.find((i) => i.id === item.id);

      itemExists.quantity += 1;

      return updateCart(state);
    },
    decrementItemQuantity: (state, action) => {
      const item = action.payload;

      const itemExists = state.cartItems.find((i) => i.id === item.id);

      itemExists.quantity -= 1;

      if (itemExists.quantity < 1) {
        state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
      }

      return updateCart(state);
    },
    setPaymentAmount: (state, action) => {
      const payment = action.payload;

      state.paymentHistory.push(payment);

      state.paymentAmount += payment;

      return updateCart(state);
    },
    deleteItem: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((i) => i.id === item.id);

      state.cartItems = state.cartItems.filter((i) => existItem.id !== i.id);

      return updateCart(state);
    },
    removePayment: (state, action) => {
      const index = action.payload;

      if (index >= 0 && index < state.paymentHistory.length) {
        state.paymentHistory.splice(index, 1);
      }

      return updateCart(state);
    },
    clearCart: (state) => {
      return initialState;
    },
  },
});

export const {
  addToCart,
  increaseItemQuantity,
  decrementItemQuantity,
  setPaymentAmount,
  deleteItem,
  clearCart,
  removePayment,
} = cartSlice.actions;

export default cartSlice.reducer;
