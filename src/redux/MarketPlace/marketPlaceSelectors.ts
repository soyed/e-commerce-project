import { createSelector } from 'reselect';

const marketplaceSelector = (state: any) => state.marketplace;

export const getMarketPlaceProducts = createSelector(
  [marketplaceSelector],
  (marketplace) => marketplace.products
);

export const getMarketplaceStatus = createSelector(
  [marketplaceSelector],
  (marketplace) => marketplace.status
);

export const getMarketplaceError = createSelector(
  [marketplaceSelector],
  (marketplace) => marketplace.message
);
