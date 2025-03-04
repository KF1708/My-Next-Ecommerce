const { createSlice } = require("@reduxjs/toolkit"); //createSlice is a function from @reduxjs/toolkit that helps create Redux slices.

const cartSlice = createSlice({
  //This initializes a Redux slice named "cart", which will store all the cart-related state and actions.

  name: "cart", //The name is "cart", which helps identify this slice inside the Redux store. It is useful for debugging and when combining multiple slices.

  initialState: [], //The initial state is an empty array ([]). This array will hold the products that the user adds to the cart.

  reducers: {
    //This section defines functions (reducers) that modify the cart state. Reducers take two parameters:  state → The current state of the cart. action → Contains the payload (data) used to update the state.

    addToCart(state, action) {
      state.push(action.payload); //Adds (pushes) the new product (action.payload) into the cart array.
    },
    removeFromCart(state, action) {
      state = state.filter((item) => item._id !== action.payload); //Removes the item from the cart whose _id matches the action.payload. Since .filter() creates a new array, we must return the new state.

      return state;
    },

    removeAll(state, action) {
      state = []; //Resets the cart to an empty array, removing all products.

      return state;
    },
  },
});

//Extracts the action creators (addToCart, removeFromCart, removeAll) from the slice. These actions will be dispatched in components to modify the cart.

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;

//Exports the reducer function so it can be used in Redux Store (store.js).Redux needs this reducer to manage the cart slice of the state.
export default cartSlice.reducer;
