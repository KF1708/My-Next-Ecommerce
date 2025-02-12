import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import cartSlice from "./cart";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    cart: cartSlice,
  },
});
