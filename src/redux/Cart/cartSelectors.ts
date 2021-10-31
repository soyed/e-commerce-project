import { createSelector } from 'reselect';

const cartSelector = (state: any) => state.cart;

export const fetchCartItems = createSelector(
  [cartSelector],
  (cart) => cart.products
);

export const cartTotalPrice = createSelector(
  [cartSelector],
  (cart) => cart.totalPrice
);

export const cartTotalItems = createSelector(
  [cartSelector],
  (cart) => cart.count
);
