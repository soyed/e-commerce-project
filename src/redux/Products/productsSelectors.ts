import { createSelector } from 'reselect';

const selectProducts = (state: any) => state.products;
export const statusForProducts = createSelector(
  [selectProducts],
  (products) => products.status
);

export const fetchProducts = createSelector(
  [selectProducts],
  (products) => products.products
);

export const failedProducts = createSelector(
  [selectProducts],
  (products) => products.errorMessage
);
