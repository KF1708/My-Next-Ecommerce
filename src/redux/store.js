import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import cartSlice from "./cart";

export const store = configureStore({
  //Creates and exports the Redux store instance using configureStore. This store holds and manages the global state of the application.

  reducer: {
    //The reducer property is an object that combines multiple slices (reducers) into one store.
    search: searchSlice, //Manages search-related state.
    cart: cartSlice, //Manages cart-related state.
  },
});
