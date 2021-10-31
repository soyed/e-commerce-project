import cartActions from './CartActions';

export const updateCartItem = (item: any) => {
  return { type: cartActions.UPDATE_CART_ITEM, payload: { item } };
};

export const addCartItem = (item: any) => {
  return { type: cartActions.ADD_TO_CART, payload: { item } };
};

export const clearCartItems = () => {
  return { type: cartActions.CLEAR_CART };
};

export const removeItemFromCart = (productId: string) => {
  return { type: cartActions.REMOVE_FROM_CART, payload: { productId } };
};
