import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    toggleLike(state, action) {
      let index = state.value?.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value?.filter((el) => el.id !== action.payload.id);
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const { toggleLike } = cartSlice.actions;
export default cartSlice.reducer;
