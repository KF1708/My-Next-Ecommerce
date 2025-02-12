const { createSlice } = require("@reduxjs/toolkit");

// const initialState = {
//   cartItems: [],
// };
const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      state = state.filter((item) => item._id !== action.payload);
      return state;
    },
    removeAll(state, action) {
      state = [];
      return state;
    },
  },
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
