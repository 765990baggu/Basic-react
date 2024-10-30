import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // Redux Toolkit uses immer Behind the scens
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //Reduxtoolkit - either Mutate the existing  state or return a new State
      //state.items.length = 0; //originalState=[]
      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItems, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
