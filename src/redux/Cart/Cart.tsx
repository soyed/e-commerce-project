import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'Cart',
  initialState: { product: 0 },
  reducers: {},
});

export default CartSlice.reducer;
