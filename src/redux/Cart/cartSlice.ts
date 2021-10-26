import { createSlice } from '@reduxjs/toolkit';

const initialState = { itemCount: 0 };

const cart = (state = initialState, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState: { product: 0 },
  reducers: {},
});

export default CartSlice.reducer;
