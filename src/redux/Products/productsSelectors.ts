import { createSelector } from 'reselect';

const selectProducts = (state: any) => state.products;
export const productsLoading = createSelector(
  [selectProducts],
  (products) => products.status
);

export const fetchProducts = createSelector(
  [selectProducts],
  (products) => products.products
);
