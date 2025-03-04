const { createSlice } = require("@reduxjs/toolkit"); ////createSlice is a function from @reduxjs/toolkit that helps create Redux slices.

const searchSlice = createSlice({
  //This initializes a Redux slice named "search", which will be responsible for managing search-related state.
  name: "search", //The "name" property gives a unique identifier to this Redux slice. It is used internally by Redux to differentiate slices when combining multiple reducers.

  initialState: {
    search: "", //initialState defines the default state for this slice.  The search property is initially set to an empty string (""), meaning no search query is active when the application starts.
  },

  reducers: {
    //This section defines functions (reducers) that modify the cart state. Reducers take two parameters:  state → The current state of the cart. action → Contains the payload (data) used to update the state.

    setSearch(state, action) {
      state.search = action.payload; //This reducer updates the search state with a new search term.
    },
  },
});

//This extracts the action creator (setSearch) from the slice.The action can be dispatched in components to update the search state dynamically.
export const { setSearch } = searchSlice.actions;

//Exports the reducer function so it can be used in Redux Store (store.js).Redux needs this reducer to manage the cart slice of the state.
export default searchSlice.reducer;
