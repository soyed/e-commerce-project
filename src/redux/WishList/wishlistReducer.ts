import wishlistActions from './wishlistActions';

const temp = [];

const initialState = {
  itemCount: 0,
  items: [],
  status: '',
};

const wishlistReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case wishlistActions.ADD_TO_WISHLIST:
      // extract product from the payload => quantity of products added to wishlist can only be 1
      const { product, quantity } = action.payload.item;

      // Check if the item exist in 'items' array and get the id for the item
      const existingItemId = state.items.findIndex(
        (item) => item.product.id === product.id
      );

      let newItems;

      // quantity does not matter if existing is matched return
      if (existingItemId !== -1) {
        // since an instance of the item is already present no need to mutate the data
        return { ...state };
      } else {
        let temp = [...state.items];
        newItems = temp.concat(action.payload.item);
      }

      const count = state.itemCount + 1;

      return { ...state, items: newItems, itemCount: count };
    case wishlistActions.REMOVE_FROM_WISHLIST:
      const { productId } = action.payload;

      // Check if the item exist in 'items' array and get the id for the item
      const existingId = state.items.findIndex(
        (item) => item.product.id === product.id
      );

      let removedItems;

      if (existingId !== -1) {
        removedItems = state.items.filter(
          (item) => item.product.id === productId
        );
      } else {
        return { ...state };
      }

      const newCount = state.itemCount - 1;

      return { ...state, itemCount: newCount, items: removedItems };
    default:
      return state;
  }
};

export default wishlistReducer;
