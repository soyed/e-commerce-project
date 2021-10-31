import { createSelector } from 'reselect';

const productSelector = (state: any) => state.product;

export const fetchedProduct = createSelector(
  [productSelector],
  (product) => product.product
);

export const statusForProduct = createSelector(
  [productSelector],
  (product) => product.status
);

export const failedProduct = createSelector(
  [productSelector],
  (product) => product.errorMessage
);
