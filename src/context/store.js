import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./counterSlice";
import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
  },
});
