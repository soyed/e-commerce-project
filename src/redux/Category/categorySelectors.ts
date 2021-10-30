import { createSelector } from 'reselect';

const categories = (state: any) => state.category;

export const categoryStatus = createSelector(
  [categories],
  (category) => category.status
);

export const categoryCommerce = createSelector(
  [categories],
  (category) => category.commerce
);
export const categoryMarketPlace = createSelector(
  [categories],
  (category) => category.marketPlace
);

export const categoryError = createSelector(
  [categories],
  (category) => category.message
);
