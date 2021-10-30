import { createSelector } from 'reselect';

const productSelector = (state: any) => state.product;

export const products = createSelector(
  [productSelector],
  (product) => product.products
);

export const statusForProduct = createSelector(
  [productSelector],
  (product) => product.status
);

export const failedProduct = createSelector(
  [productSelector],
  (product) => product.errorMessage
);
