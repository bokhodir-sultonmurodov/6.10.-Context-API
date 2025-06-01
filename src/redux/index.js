import { configureStore } from '@reduxjs/toolkit'
import counter from "./features/counter.slice"
import wishlist from "./features/wishlist.slice"
export const store = configureStore({
  reducer: {
    counter,
    wishlist,
    // cart,
    // token,
    // auth,
  },
})