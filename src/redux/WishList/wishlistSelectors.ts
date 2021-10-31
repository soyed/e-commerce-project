import { createSelector } from 'reselect';

const wishlistSelector = (state: any) => state.wishlist;

export const wishlistItemCount = createSelector(
  [wishlistSelector],
  (wishlist) => wishlist.itemCount
);

export const wishlistProducts = createSelector(
  [wishlistSelector],
  (wishlist) => wishlist.items
);
