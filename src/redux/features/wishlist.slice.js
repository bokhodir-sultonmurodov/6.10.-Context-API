// redux/features/wishlist.slice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  like: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    like: (state, action) => {
      state.like.push(action.payload)
    },
  },
})

export const { like } = wishlistSlice.actions

export default wishlistSlice.reducer
