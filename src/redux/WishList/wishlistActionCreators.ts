import { CartItem } from '../Cart/utils';
import wishlistActions from './wishlistActions';

export const addToWishList = (item: CartItem) => {
  return { type: wishlistActions.ADD_TO_WISHLIST, payload: { item } };
};

export const removeFromWishlist = (productId: string) => {
  return { type: wishlistActions.REMOVE_FROM_WISHLIST, payload: { productId } };
};
