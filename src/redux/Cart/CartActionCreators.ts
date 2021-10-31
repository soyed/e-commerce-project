import cartActions from './CartActions';
import { CartItem } from './utils';

export const addCartItem = (item: CartItem) => {
  return { type: cartActions.ADD_TO_CART, payload: { item } };
};

export const clearCartItems = () => {
  return { type: cartActions.CLEAR_CART };
};

export const removeItemFromCart = (productId: string) => {
  return {
    type: cartActions.REMOVE_FROM_CART,
    payload: { productId },
  };
};
