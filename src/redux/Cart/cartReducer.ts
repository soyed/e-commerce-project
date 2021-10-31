import cartActions from './CartActions';

const initialState = { count: 0, totalPrice: 0, products: [] };

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART:
      return { ...state };
    case cartActions.REMOVE_FROM_CART:
      return { ...state };
    case cartActions.UPDATE_CART_ITEM:
      return { ...state };
    case cartActions.CLEAR_CART:
      return { ...state };
    default:
      return state;
  }
};

export default cartReducer;
