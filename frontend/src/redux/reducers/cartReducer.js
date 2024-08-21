import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = { cartItems: [] };

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
  },
});

export const { addToCart, increaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
